import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { Block } from 'payload/types'

export const SwiperSimple: Block = {
  slug: 'swiperSimple',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'slides',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'images',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
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
