import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const WebMedia: CollectionConfig = {
  slug: CollectionSlug.WEB_MEDIA,
  labels: {
    singular: {
      en: 'Web Media',
      de: 'Web Medien',
    },
    plural: {
      en: 'Web Media',
      de: 'Web Medien',
    },
  },
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
