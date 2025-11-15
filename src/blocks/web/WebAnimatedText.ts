import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { Block } from 'payload'

export const WebAnimatedText: Block = {
  slug: 'web-animatedText',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
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
