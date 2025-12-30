import { link } from '@/fields/shared'
import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const PublicSocials: CollectionConfig = {
  slug: CollectionSlug.PUBLIC_SOCIALS,
  labels: {
    singular: {
      en: 'Public Social',
      de: 'Public Sozial',
    },
    plural: {
      en: 'Public Socials',
      de: 'Public Socials',
    },
  },
  admin: {
    group: CollectionGroup.PUBLIC_CONTENT,
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      ...link,
    },
    {
      name: 'icon',
      enumName: 'social_icon_enum',
      label: {
        en: 'Icon',
        de: 'Icon',
      },
      type: 'select',
      options: ['facebook', 'instagram'],
    },
    {
      name: 'backgroundImage',
      label: {
        en: 'Background Image',
        de: 'Hintergrundbild',
      },
      type: 'upload',
      relationTo: CollectionSlug.PUBLIC_IMAGES,
    },
  ],
}
