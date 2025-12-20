import { imageLink } from '@/fields/web/ImageLink'
import { spacing } from '@/fields/web'
import { Block } from 'payload'

export const WebHighlightedLinks: Block = {
  slug: 'web-highlighted-links',
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
