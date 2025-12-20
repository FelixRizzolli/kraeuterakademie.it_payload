import { imageLink } from '@/fields/web/ImageLink'
import { spacing } from '@/fields/web'
import { Block } from 'payload'

export const WebHighlightedLinks: Block = {
  slug: 'web-highlighted-links',
  fields: [
    {
      type: 'group',
      name: 'data',
      label: {
        en: 'Data',
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
      type: 'group',
      name: 'settings',
      label: {
        en: 'Settings',
        de: 'Einstellungen',
      },
      fields: [spacing],
    },
  ],
}
