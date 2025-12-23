import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const CourseModules: CollectionConfig = {
  slug: CollectionSlug.COURSE_MODULES,
  labels: {
    singular: {
      en: 'Course Module',
      de: 'Kurs Modul',
    },
    plural: {
      en: 'Course Modules',
      de: 'Kurs Module',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['course', 'title', 'date'],
    group: CollectionGroup.COURSES,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Module Title',
        de: 'Modultitel',
      },
      admin: {
        description: {
          en: 'Auto-generated or custom title for the module',
          de: 'Automatisch generierter oder benutzerdefinierter Titel für das Modul',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            // Auto-generate title if not provided
            if (!siblingData.title && siblingData.date) {
              const date = new Date(siblingData.date)
              return `Module ${date.toLocaleDateString('de-DE')}`
            }
            return siblingData.title
          },
        ],
      },
    },
    {
      name: 'course',
      type: 'relationship',
      relationTo: CollectionSlug.COURSES,
      required: true,
      label: {
        en: 'Course',
        de: 'Kurs',
      },
      admin: {
        description: {
          en: 'The course this module belongs to',
          de: 'Der Kurs, zu dem dieses Modul gehört',
        },
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: {
        en: 'Date',
        de: 'Datum',
      },
      admin: {
        description: {
          en: 'Date when the module takes place',
          de: 'Datum, an dem das Modul stattfindet',
        },
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'dd.MM.yyyy HH:mm',
        },
      },
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
      label: 'Description',
    },
    {
      name: 'plants',
      type: 'array',
      label: 'Plants',
      admin: {
        description: 'Plants assigned to this module with checklist status',
      },
      fields: [
        {
          name: 'plant',
          type: 'relationship',
          relationTo: CollectionSlug.PLANTS,
          required: true,
          label: {
            en: 'Plant',
            de: 'Pflanze',
          },
        },
        {
          name: 'studied',
          type: 'checkbox',
          label: {
            en: 'Studied',
            de: 'Studiert',
          },
          defaultValue: false,
          admin: {
            description: {
              en: 'Check if this plant was studied during the module',
              de: 'Ankreuzen, wenn diese Pflanze während des Moduls studiert wurde',
            },
          },
        },
      ],
    },
    {
      name: 'participants',
      type: 'relationship',
      relationTo: CollectionSlug.USERS,
      hasMany: true,
      label: {
        en: 'Module Participants',
        de: 'Modulteilnehmer',
      },
      admin: {
        description: {
          en: 'Participants who attended this specific module',
          de: 'Teilnehmer, die an diesem speziellen Modul teilgenommen haben',
        },
      },
    },
    {
      name: 'excoursions',
      type: 'relationship',
      relationTo: CollectionSlug.COURSE_EXCOURSION,
      hasMany: true,
      label: {
        en: 'Excoursions',
        de: 'Exkursionen',
      },
      admin: {
        description: {
          en: 'Excoursions associated with this module',
          de: 'Exkursionen, die diesem Modul zugeordnet sind',
        },
      },
    },
    {
      name: 'practiceUnits',
      type: 'relationship',
      relationTo: CollectionSlug.COURSE_PRACTICE_UNIT,
      hasMany: true,
      label: {
        en: 'Practice Units',
        de: 'Praxiseinheiten',
      },
      admin: {
        description: {
          en: 'Practice units associated with this module',
          de: 'Praxiseinheiten, die diesem Modul zugeordnet sind',
        },
      },
    },
  ],
}
