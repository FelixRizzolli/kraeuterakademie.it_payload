import { link } from '@/fields/web'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebTextElement: Block = {
  slug: 'web-text-element',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({}),
          required: true,
        },
        link,
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [spacing, style],
    },
  ],
}
