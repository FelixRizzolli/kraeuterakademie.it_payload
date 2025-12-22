import { link } from '@/fields/shared'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebTextElement: Block = {
  slug: 'web-text-element',
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
              required: true,
            },
            {
              name: 'content',
              label: {
                en: 'Content',
                de: 'Inhalt',
              },
              type: 'richText',
              editor: lexicalEditor({}),
              required: true,
            },
            link,
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
