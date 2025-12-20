import { spacing } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebHeroLarge: Block = {
  slug: 'web-hero-large',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: CollectionSlug.WEB_MEDIA,
          required: true,
        },
        {
          name: 'title',
          type: 'text',
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
