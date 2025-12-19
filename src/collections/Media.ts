import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: CollectionSlug.MEDIA,
  admin: {
    group: CollectionGroup.WEB_CONTENT,
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
