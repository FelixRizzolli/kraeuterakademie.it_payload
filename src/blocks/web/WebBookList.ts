import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
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
              type: 'relationship',
              relationTo: CollectionSlug.WEB_BOOKS,
              hasMany: true,
              required: false,
              admin: {
                description: {
                  en: 'Select books to display in this list',
                  de: 'Wählen Sie Bücher aus, die in dieser Liste angezeigt werden sollen',
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
