import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
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
          relationTo: CollectionSlug.WEB_MEDIA,
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
