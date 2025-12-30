import { spacing } from '@/fields/public'
import { style } from '@/fields/public'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const PublicBookList: Block = {
  slug: 'public-book-list',
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
              relationTo: CollectionSlug.PUBLIC_BOOKS,
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
