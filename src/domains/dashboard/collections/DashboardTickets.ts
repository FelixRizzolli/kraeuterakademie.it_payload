import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

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
  access: administratorWritePublicRead,
  hooks: {
    beforeChange: [
      async ({ operation, data, originalDoc }: any) => {
        if (
          operation === 'update' &&
          originalDoc &&
          data.author &&
          originalDoc.author !== data.author
        ) {
          throw new Error('Author cannot be changed')
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
