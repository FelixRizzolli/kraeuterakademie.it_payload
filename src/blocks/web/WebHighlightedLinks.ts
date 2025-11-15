import { imageLink } from '@/fields/web/ImageLink'
import { spacing } from '@/fields/web'
import { Block } from 'payload'

export const WebHighlightedLinks: Block = {
  slug: 'web-highlighted-links',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'links',
          type: 'array',
          fields: imageLink.fields,
        },
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [spacing],
    },
  ],
}
