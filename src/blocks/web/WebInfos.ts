import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { link } from '@/fields/web'
import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const WebInfos: Block = {
  slug: 'web-infos',
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
