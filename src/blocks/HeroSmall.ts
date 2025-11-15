import { spacing } from '@/fields/spacing'
import { link } from '@/fields/link'
import { Block } from 'payload/types'

export const HeroSmall: Block = {
  slug: 'heroSmall',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        link,
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [spacing],
    },
  ],
}
