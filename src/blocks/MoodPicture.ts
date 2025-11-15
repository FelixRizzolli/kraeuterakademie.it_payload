import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { Block } from 'payload/types'

export const MoodPicture: Block = {
  slug: 'moodPicture',
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
