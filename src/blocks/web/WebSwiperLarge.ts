import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { link } from '@/fields/web'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebSwiperLarge: Block = {
  slug: 'web-swiper-large',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'infos',
              type: 'text',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'richText',
              editor: lexicalEditor({}),
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
