import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { link } from '@/fields/link'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload/types'

export const SwiperLarge: Block = {
  slug: 'swiperLarge',
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
