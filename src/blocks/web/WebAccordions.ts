import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'

export const WebAccordions: Block = {
  slug: 'web-accordions',
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
