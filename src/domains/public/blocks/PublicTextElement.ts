import { link } from '@/domains/shared/fields'
import { spacing } from '@/domains/public/fields'
import { style } from '@/domains/public/fields'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const PublicTextElement: Block = {
  slug: 'public-text-element',
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
