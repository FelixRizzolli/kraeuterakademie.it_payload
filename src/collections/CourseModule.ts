import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const CourseModule: CollectionConfig = {
  slug: 'course-modules',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'course'],
    group: 'Courses',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
      admin: {
        description: 'Auto-generated or custom title for the module',
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
      relationTo: 'courses',
      required: true,
      label: 'Course',
      admin: {
        description: 'The course this module belongs to',
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Date',
      admin: {
        description: 'Date when the module takes place',
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
          relationTo: 'plants',
          required: true,
          label: 'Plant',
        },
        {
          name: 'studied',
          type: 'checkbox',
          label: 'Studied',
          defaultValue: false,
          admin: {
            description: 'Check if this plant was studied during the module',
          },
        },
      ],
    },
    {
      name: 'participants',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      label: 'Module Participants',
      admin: {
        description: 'Participants who attended this specific module',
      },
      filterOptions: {
        role: {
          equals: 'participant',
        },
      },
    },
  ],
}
