import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { Block } from 'payload/types'

export const AnimatedText: Block = {
  slug: 'animatedText',
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
