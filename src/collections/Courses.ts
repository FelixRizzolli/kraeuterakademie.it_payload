import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
  CollectionGroup,
  CollectionSlug,
  COURSE_PLACE_OPTIONS,
  COURSE_STATUS_OPTIONS,
  CourseStatus,
} from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const Courses: CollectionConfig = {
  slug: CollectionSlug.COURSES,
  labels: {
    singular: {
      en: 'Course',
      de: 'Kurs',
    },
    plural: {
      en: 'Courses',
      de: 'Kurse',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'place', 'status'],
    group: CollectionGroup.COURSES,
  },
  access: administratorWritePublicRead,
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
              name: 'name',
              type: 'text',
              required: true,
              unique: true,
              label: {
                en: 'Course Name',
                de: 'Kursname',
              },
              admin: {
                description: {
                  en: 'Unique course identifier (e.g., K1, K2, K3)',
                  de: 'Eindeutiger Kursbezeichner (z.B. K1, K2, K3)',
                },
              },
            },
            {
              name: 'place',
              type: 'select',
              required: true,
              label: {
                en: 'Place',
                de: 'Ort',
              },
              options: COURSE_PLACE_OPTIONS,
              admin: {
                description: {
                  en: 'Location where the course takes place',
                  de: 'Ort, an dem der Kurs stattfindet',
                },
              },
            },
            {
              name: 'description',
              type: 'richText',
              editor: lexicalEditor(),
              label: {
                en: 'Course Description',
                de: 'Kursbeschreibung',
              },
            },
            {
              name: 'status',
              type: 'select',
              required: true,
              defaultValue: CourseStatus.OPEN,
              label: {
                en: 'Status',
                de: 'Status',
              },
              options: COURSE_STATUS_OPTIONS,
              admin: {
                description: {
                  en: 'Current status of the course',
                  de: 'Aktueller Status des Kurses',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Modules',
            de: 'Module',
          },
          fields: [
            {
              name: 'modules',
              type: 'join',
              collection: CollectionSlug.COURSE_MODULES,
              on: 'course',
              label: {
                en: 'Course Modules',
                de: 'Kursmodule',
              },
              admin: {
                description: {
                  en: 'Modules that belong to this course',
                  de: 'Module, die zu diesem Kurs gehören',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Administration',
            de: 'Administration',
          },
          fields: [
            {
              name: 'participants',
              type: 'relationship',
              relationTo: CollectionSlug.USERS,
              hasMany: true,
              label: {
                en: 'Course Participants',
                de: 'Kursteilnehmer',
              },
              admin: {
                description: {
                  en: 'Users enrolled in this course',
                  de: 'Benutzer, die in diesem Kurs eingeschrieben sind',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Other',
            de: 'Weiteres',
          },
          fields: [
            {
              name: 'sharedDocuments',
              type: 'relationship',
              relationTo: CollectionSlug.COURSE_SHARED_DOCUMENTS,
              hasMany: true,
              label: {
                en: 'Shared Documents',
                de: 'Geteilte Dokumente',
              },
              admin: {
                description: {
                  en: 'Shared documents associated with this module',
                  de: 'Geteilte Dokumente, die diesem Modul zugeordnet sind',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
