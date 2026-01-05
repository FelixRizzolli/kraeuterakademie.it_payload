import type { AccessArgs, CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { hasDashboardAccess, isAdministrator, isAdministratorFieldLevel } from '@/lib/access'

const isAdministratorOrHasDashboardAccessWithOwnTicketsOnly = ({
  data,
  req: { user },
}: AccessArgs) => {
  if (!user) {
    throw new Error('User must be authenticated to perform this action')
  }

  // Administrators can read and modify all tickets
  if (isAdministrator({ req: { user } } as AccessArgs)) {
    return true
  }

  if (data && data.author && data.author !== user.id) {
    throw new Error('User can only read and edit their own tickets')
  }

  // Non-admins can only read or modify tickets they authored.
  return {
    author: {
      equals: user.id,
    },
  }
}

export const DashboardTickets: CollectionConfig = {
  slug: CollectionSlug.DASHBOARD_TICKETS,
  labels: {
    singular: {
      en: 'Dashboard Ticket',
      de: 'Dashboard Ticket',
    },
    plural: {
      en: 'Dashboard Tickets',
      de: 'Dashboard Tickets',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
    group: CollectionGroup.DASHBOARD_CONTENT,
  },
  access: {
    read: isAdministratorOrHasDashboardAccessWithOwnTicketsOnly,
    create: hasDashboardAccess,
    update: isAdministratorOrHasDashboardAccessWithOwnTicketsOnly,
    delete: isAdministrator,
  },
  hooks: {
    beforeChange: [
      async ({ operation, data, originalDoc, req: { user } }: any) => {
        // Ensure user is authenticated
        if (!user) {
          throw new Error('User must be authenticated to perform this action')
        }

        // On create, ensure user is creating ticket for themselves
        if (user.id !== data.author && !isAdministrator({ req: { user } } as AccessArgs)) {
          throw new Error('User can only create tickets for themselves')
        }

        if (operation === 'update' && originalDoc) {
          // Prevent changing author
          if (data.author && originalDoc.author !== data.author) {
            throw new Error('Author cannot be changed')
          }

          // Prevent changing title or description when status is in-progress
          if (data.status === 'in-progress') {
            if (data.title && originalDoc.title !== data.title) {
              throw new Error('Title cannot be changed, when status is in-progress')
            }
            if (data.description && originalDoc.description !== data.description) {
              throw new Error('Description cannot be changed, when status is in-progress')
            }
          }
        }

        // Only administrators can change status, priority, and assignedTo
        if (!isAdministrator({ req: { user } } as AccessArgs)) {
          if (
            data.status &&
            ((operation === 'create' && data.status !== 'open') ||
              (operation === 'update' && originalDoc.status !== data.status))
          ) {
            throw new Error('Only administrators can change the status')
          }
          if (
            data.priority &&
            ((operation === 'create' && data.priority !== 'medium') ||
              (operation === 'update' && originalDoc.priority !== data.priority))
          ) {
            throw new Error('Only administrators can change the priority')
          }
          if (
            data.assignedTo &&
            ((operation === 'create' && data.assignedTo !== null) ||
              (operation === 'update' && originalDoc.assignedTo !== data.assignedTo))
          ) {
            throw new Error('Only administrators can change the assigned user')
          }
        }

        return data
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'General',
            de: 'Generell',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: {
                en: 'Title',
                de: 'Titel',
              },
            },
            {
              name: 'category',
              type: 'relationship',
              relationTo: CollectionSlug.DASHBOARD_TICKET_CATEGORIES,
              hasMany: false,
              label: {
                en: 'Category',
                de: 'Kategorie',
              },
              admin: {
                description: {
                  en: 'Category of this ticket',
                  de: 'Kategorie dieses Tickets',
                },
              },
            },
            {
              name: 'description',
              type: 'textarea',
              label: {
                en: 'Description',
                de: 'Beschreibung',
              },
            },
          ],
        },
        {
          label: {
            en: 'Administration',
            de: 'Verwaltung',
          },
          fields: [
            {
              name: 'status',
              type: 'select',
              label: {
                en: 'Status',
                de: 'Status',
              },
              options: [
                { label: { en: 'Open', de: 'Offen' }, value: 'open' },
                { label: { en: 'In Progress', de: 'In Bearbeitung' }, value: 'in-progress' },
                { label: { en: 'Closed', de: 'Geschlossen' }, value: 'closed' },
              ],
              defaultValue: 'open',
              required: true,
              access: {
                update: isAdministratorFieldLevel,
              },
            },
            {
              name: 'priority',
              type: 'select',
              label: {
                en: 'Priority',
                de: 'Priorität',
              },
              options: [
                { label: { en: 'Low', de: 'Niedrig' }, value: 'low' },
                { label: { en: 'Medium', de: 'Mittel' }, value: 'medium' },
                { label: { en: 'High', de: 'Hoch' }, value: 'high' },
              ],
              defaultValue: 'medium',
              required: true,
              access: {
                update: isAdministratorFieldLevel,
              },
            },
            {
              name: 'author',
              type: 'relationship',
              relationTo: CollectionSlug.USERS,
              hasMany: false,
              required: true,
              label: {
                en: 'Ticket Author',
                de: 'Ticket Verfasser',
              },
              admin: {
                description: {
                  en: 'User who authored this ticket',
                  de: 'Benutzer, der dieses Ticket verfasst hat',
                },
              },
              access: {
                update: () => false,
              },
            },
            {
              name: 'assignedTo',
              type: 'relationship',
              relationTo: CollectionSlug.USERS,
              hasMany: false,
              label: {
                en: 'Assigned To',
                de: 'Zugewiesen an',
              },
              admin: {
                description: {
                  en: 'User assigned to this ticket',
                  de: 'Benutzer, dem dieses Ticket zugewiesen ist',
                },
              },
              access: {
                update: isAdministratorFieldLevel,
              },
            },
          ],
        },
        {
          label: {
            en: 'Comments',
            de: 'Kommentare',
          },
          fields: [
            {
              name: 'comments',
              type: 'array',
              label: {
                en: 'Comments',
                de: 'Kommentare',
              },
              fields: [
                {
                  name: 'commenter',
                  type: 'relationship',
                  relationTo: CollectionSlug.USERS,
                  hasMany: false,
                  label: {
                    en: 'Commenter',
                    de: 'Kommentator',
                  },
                },
                {
                  name: 'commentText',
                  type: 'textarea',
                  label: {
                    en: 'Comment Text',
                    de: 'Kommentartext',
                  },
                },
                {
                  name: 'createdAt',
                  type: 'date',
                  label: {
                    en: 'Created At',
                    de: 'Erstellt am',
                  },
                  defaultValue: new Date().toISOString(),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
