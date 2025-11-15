import { link } from '@/fields/link'
import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload/types'

export const BookList: Block = {
  slug: 'bookList',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false,
        },
        {
          name: 'books',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'infos',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'richText',
              editor: lexicalEditor({}),
            },
            {
              name: 'cover',
              type: 'upload',
              relationTo: 'media',
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
