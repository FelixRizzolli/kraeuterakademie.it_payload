import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebSwiperSimple: Block = {
  slug: 'web-swiper-simple',
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
                  relationTo: CollectionSlug.WEB_MEDIA,
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
