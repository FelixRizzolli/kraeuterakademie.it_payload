import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { Block } from 'payload'

export const WebMoodPicture: Block = {
  slug: 'web-mood-picture',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
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
