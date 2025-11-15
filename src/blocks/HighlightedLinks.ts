import { imageLink } from '@/fields/image-link'
import { spacing } from '@/fields/spacing'
import { Block } from 'payload/types'

export const HighlightedLinks: Block = {
  slug: 'highlightedLinks',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'links',
          type: 'array',
          fields: imageLink.fields,
        },
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [spacing],
    },
  ],
}
