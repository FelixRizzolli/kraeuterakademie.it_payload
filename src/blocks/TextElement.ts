import { link } from '@/fields/link'
import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload/types'

export const TextElement: Block = {
  slug: 'textElement',
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
