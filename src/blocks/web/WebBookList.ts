import { link } from '@/fields/shared'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebBookList: Block = {
  slug: 'web-book-list',
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
              name: 'books',
              label: {
                en: 'Books',
                de: 'Bücher',
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
                  name: 'infos',
                  label: {
                    en: 'Infos',
                    de: 'Infos',
                  },
                  type: 'text',
                  required: true,
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
                {
                  name: 'cover',
                  label: {
                    en: 'Cover Image',
                    de: 'Cover Bild',
                  },
                  type: 'upload',
                  relationTo: CollectionSlug.WEB_MEDIA,
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
