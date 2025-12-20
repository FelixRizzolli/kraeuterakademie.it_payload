import { link } from '@/fields/web'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebBookList: Block = {
  slug: 'web-book-list',
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
              relationTo: CollectionSlug.WEB_MEDIA,
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
