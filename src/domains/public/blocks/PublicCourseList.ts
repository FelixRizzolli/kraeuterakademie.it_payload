import { spacing } from '@/domains/public/fields'
import { style } from '@/domains/public/fields'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const PublicCourseList: Block = {
  slug: 'public-course-list',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          label: {
            en: 'Content',
            de: 'Inhalt',
          },
          fields: [
            {
              name: 'title',
              label: {
                en: 'Title',
                de: 'Titel',
              },
              type: 'text',
              required: false,
            },
            {
              name: 'courses',
              label: {
                en: 'Courses',
                de: 'Kurse',
              },
              type: 'relationship',
              relationTo: CollectionSlug.COURSES,
              hasMany: true,
              required: false,
              admin: {
                description: {
                  en: 'Select courses to display in this list',
                  de: 'Wählen Sie Kurse aus, die in dieser Liste angezeigt werden sollen',
                },
              },
            },
          ],
        },
        {
          name: 'settings',
          label: {
            en: 'Settings',
            de: 'Einstellungen',
          },
          fields: [spacing, style],
        },
      ],
    },
  ],
}
