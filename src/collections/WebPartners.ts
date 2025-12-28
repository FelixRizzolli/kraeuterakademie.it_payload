import { link } from '@/fields/shared'
import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const WebPartners: CollectionConfig = {
  slug: CollectionSlug.WEB_PARTNERS,
  labels: {
    singular: {
      en: 'Web Partner',
      de: 'Web Partner',
    },
    plural: {
      en: 'Web Partners',
      de: 'Web Partner',
    },
  },
  admin: {
    group: CollectionGroup.WEB_CONTENT,
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      name: 'name',
      label: {
        en: 'Name',
        de: 'Name',
      },
      type: 'text',
    },
    {
      ...link,
    },
    {
      name: 'image',
      label: {
        en: 'Image',
        de: 'Bild',
      },
      type: 'upload',
      relationTo: CollectionSlug.WEB_IMAGES,
    },
  ],
}
