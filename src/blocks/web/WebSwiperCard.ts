import { link } from '@/fields/web'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { Block } from 'payload'

export const WebSwiperCard: Block = {
  slug: 'web-swiper-card',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'cards',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'info',
              type: 'text',
            },
            {
              name: 'date',
              type: 'date',
            },
            {
              name: 'title',
              type: 'text',
            },
            link,
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [spacing, style],
    },
  ],
}
