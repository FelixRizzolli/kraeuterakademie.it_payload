import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { link } from '@/fields/link'
import { Block } from 'payload/types'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Infos: Block = {
  slug: 'infos',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'infos',
          type: 'array',
          fields: [
            {
              name: 'infos',
              type: 'group',
              required: true,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: false,
                },
                {
                  name: 'text',
                  type: 'richText',
                  editor: lexicalEditor({}),
                  required: false,
                },
              ],
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
