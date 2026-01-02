import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug, UserRole } from '@/lib/constants'
import { administratorOrSelf, isAdministratorFieldLevel } from '@/lib/access'
import InvitationTokenField from '../components/InvitationTokenField'

export const Users: CollectionConfig = {
  slug: CollectionSlug.USERS,
  labels: {
    singular: {
      en: 'User',
      de: 'Benutzer',
    },
    plural: {
      en: 'Users',
      de: 'Benutzer',
    },
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'roles'],
    description: 'Manage user accounts and their roles',
    group: CollectionGroup.ADMINISTRATION,
  },
  auth: {
    // Require email verification for non-admin roles
    verify: false, // Set to true in production
  },
  access: administratorOrSelf,
  hooks: {
    beforeChange: [
      async ({ data, req, operation, originalDoc }) => {
        // If an invitationToken was set/changed, ensure password is null to prevent accidental overwrite
        if (
          data?.invitationToken &&
          (!originalDoc || originalDoc.invitationToken !== data.invitationToken)
        ) {
          data.password = null
        }

        // Automatically assign super-admin role to the first user
        if (operation === 'create') {
          const existingUsers = await req.payload.find({
            collection: CollectionSlug.USERS,
            limit: 1,
            pagination: false,
          })

          // If this is the first user and no roles are assigned, assign super-admin
          if (existingUsers.docs.length === 0 && (!data.roles || data.roles.length === 0)) {
            // Find the super-admin role
            const superAdminRole = await req.payload.find({
              collection: CollectionSlug.ROLES,
              where: {
                slug: {
                  equals: UserRole.SUPER_ADMIN,
                },
              },
              limit: 1,
            })

            if (superAdminRole.docs.length > 0) {
              data.roles = [superAdminRole.docs[0].id]
            }
          }
        }

        return data
      },
    ],
    afterChange: [
      async ({ doc, previousDoc, operation, req }) => {
        // If password is set/changed and invitationToken exists, remove the invitationToken
        if (
          operation === 'update' &&
          doc?.password &&
          previousDoc?.invitationToken &&
          doc.invitationToken
        ) {
          await req.payload.update({
            collection: CollectionSlug.USERS,
            id: doc.id,
            data: { invitationToken: null },
          })
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Basic Information',
            de: 'Grundinformationen',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'firstName',
                  type: 'text',
                  label: {
                    en: 'First Name',
                    de: 'Vorname',
                  },
                },
                {
                  name: 'lastName',
                  type: 'text',
                  label: {
                    en: 'Last Name',
                    de: 'Nachname',
                  },
                },
              ],
            },
            {
              name: 'invitationToken',
              type: 'text',
              label: {
                en: 'Invitation Token',
                de: 'Einladungscode',
              },
              admin: {
                description: {
                  en: 'One-time invitation token for user registration. Generate and share with the user.',
                  de: 'Einmaliger Einladungscode für die Benutzerregistrierung. Generieren und an den Benutzer weitergeben.',
                },
                components: {
                  Field: InvitationTokenField as any,
                },
              },
              access: {
                create: isAdministratorFieldLevel,
                update: isAdministratorFieldLevel,
                read: isAdministratorFieldLevel,
              },
            },
            {
              name: 'roles',
              type: 'relationship',
              relationTo: CollectionSlug.ROLES,
              hasMany: true,
              required: true,
              label: {
                en: 'Roles',
                de: 'Rollen',
              },
              admin: {
                description: {
                  en: 'User can have multiple roles (e.g., Dashboard User + Quiz Player)',
                  de: 'Benutzer können mehrere Rollen haben (z. B. Dashboard-Benutzer + Quiz-Teilnehmer)',
                },
              },
              access: {
                create: isAdministratorFieldLevel,
                update: isAdministratorFieldLevel,
              },
            },
            {
              name: 'notes',
              label: {
                en: 'Notes',
                de: 'Notizen',
              },
              type: 'textarea',
              admin: {
                description: {
                  en: 'Internal notes about the user (not visible to the user)',
                  de: 'Interne Notizen über den Benutzer (für den Benutzer nicht sichtbar)',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Course Information',
            de: 'Kursinformationen',
          },
          fields: [
            {
              name: 'enrolledCourses',
              type: 'join',
              collection: CollectionSlug.COURSES,
              on: 'participants',
              label: {
                en: 'Enrolled Courses',
                de: 'Eingeschriebene Kurse',
              },
              admin: {
                description: {
                  en: 'Courses this user is enrolled in',
                  de: 'Kurse, in die dieser Benutzer eingeschrieben ist',
                },
                allowCreate: false,
              },
            },
            {
              name: 'attendedModules',
              type: 'join',
              collection: CollectionSlug.COURSE_MODULES,
              on: 'participants',
              label: {
                en: 'Attended Modules',
                de: 'Besuchte Module',
              },
              admin: {
                description: {
                  en: 'Modules this user has attended',
                  de: 'Module, die dieser Benutzer besucht hat',
                },
                allowCreate: false,
              },
            },
          ],
        },
        {
          label: {
            en: 'Personal Information',
            de: 'Persönliche Informationen',
          },
          fields: [
            {
              name: 'address',
              type: 'group',
              label: {
                en: 'Address Information',
                de: 'Adressinformationen',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'place',
                      type: 'text',
                      label: {
                        en: 'Place',
                        de: 'Ort',
                      },
                    },
                    {
                      name: 'zip',
                      type: 'text',
                      label: {
                        en: 'ZIP Code',
                        de: 'PLZ',
                      },
                    },
                    {
                      name: 'street',
                      type: 'text',
                      label: {
                        en: 'Street',
                        de: 'Straße',
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'group',
              label: {
                en: 'Birth Information',
                de: 'Geburtsinformationen',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'birthDate',
                      type: 'date',
                      label: {
                        en: 'Birth Date',
                        de: 'Geburtsdatum',
                      },
                    },
                    {
                      name: 'birthPlace',
                      type: 'text',
                      label: {
                        en: 'Birth Place',
                        de: 'Geburtsort',
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'group',
              label: {
                en: 'Other Information',
                de: 'Sonstige Informationen',
              },
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  label: {
                    en: 'Phone',
                    de: 'Telefon',
                  },
                },
                {
                  name: 'taxNumber',
                  type: 'text',
                  label: {
                    en: 'Tax Number',
                    de: 'Steuernummer',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Profile',
            de: 'Profil',
          },
          fields: [
            {
              name: 'profilename',
              type: 'text',
              label: {
                en: 'Profile Name',
                de: 'Profilname',
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
            {
              type: 'group',
              label: {
                en: 'Social Media Links',
                de: 'Soziale Medien Links',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'linkedin',
                      type: 'text',
                      label: {
                        en: 'LinkedIn',
                        de: 'LinkedIn',
                      },
                    },
                    {
                      name: 'instagram',
                      type: 'text',
                      label: {
                        en: 'Instagram',
                        de: 'Instagram',
                      },
                    },
                    {
                      name: 'facebook',
                      type: 'text',
                      label: {
                        en: 'Facebook',
                        de: 'Facebook',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
