import { link } from '@/fields/web'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebCourseList: Block = {
  slug: 'web-course-list',
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
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: {
                    en: 'Title',
                    de: 'Titel',
                  },
                  type: 'text',
                  required: true,
                },
                {
                  name: 'place',
                  label: {
                    en: 'Place',
                    de: 'Ort',
                  },
                  type: 'text',
                  required: false,
                },
                {
                  name: 'description',
                  label: {
                    en: 'Description',
                    de: 'Beschreibung',
                  },
                  type: 'richText',
                  editor: lexicalEditor({}),
                },
                link,
              ],
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
