import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload/types'
import { spacing } from '../fields/spacing'
import { style } from '@/fields/style'

export const Accordions: Block = {
  slug: 'accordions',
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
          name: 'AccordionItems',
          type: 'array',
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
