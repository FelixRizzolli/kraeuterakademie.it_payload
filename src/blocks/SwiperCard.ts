import { link } from '@/fields/link'
import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { Block } from 'payload/types'

export const SwiperCard: Block = {
  slug: 'swiperCard',
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
