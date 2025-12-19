import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: CollectionSlug.MEDIA,
  admin: {
    group: CollectionGroup.WEBCONTENT,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
