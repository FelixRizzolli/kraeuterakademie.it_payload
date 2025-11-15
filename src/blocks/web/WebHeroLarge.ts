import { spacing } from '@/fields/web'
import { Block } from 'payload'

export const WebHeroLarge: Block = {
  slug: 'web-hero-large',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
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
