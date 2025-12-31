import { imageLink } from '@/domains/public/fields/ImageLink'
import { spacing } from '@/domains/public/fields'
import { Block } from 'payload'

export const PublicHighlightedLinks: Block = {
  slug: 'public-highlighted-links',
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
              name: 'links',
              label: {
                en: 'Highlighted Links',
                de: 'Hervorgehobene Links',
              },
              type: 'array',
              fields: imageLink.fields,
            },
          ],
        },
        {
          name: 'settings',
          label: {
            en: 'Settings',
            de: 'Einstellungen',
          },
          fields: [spacing],
        },
      ],
    },
  ],
}
