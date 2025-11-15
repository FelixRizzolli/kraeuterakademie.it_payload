import { spacing } from '@/fields/web'
import { link } from '@/fields/web'
import { Block } from 'payload'

export const WebHeroSmall: Block = {
  slug: 'web-hero-small',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        link,
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [spacing],
    },
  ],
}
