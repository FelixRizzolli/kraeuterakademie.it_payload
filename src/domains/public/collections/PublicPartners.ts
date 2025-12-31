import { link } from '@/domains/shared/fields'
import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const PublicPartners: CollectionConfig = {
  slug: CollectionSlug.PUBLIC_PARTNERS,
  labels: {
    singular: {
      en: 'Public Partner',
      de: 'Public Partner',
    },
    plural: {
      en: 'Public Partners',
      de: 'Public Partner',
    },
  },
  admin: {
    group: CollectionGroup.PUBLIC_CONTENT,
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
      relationTo: CollectionSlug.PUBLIC_IMAGES,
    },
  ],
}
