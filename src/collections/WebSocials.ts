import { link } from '@/fields/shared'
import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const WebSocials: CollectionConfig = {
  slug: CollectionSlug.WEB_SOCIALS,
  labels: {
    singular: {
      en: 'Web Social',
      de: 'Web Sozial',
    },
    plural: {
      en: 'Web Socials',
      de: 'Web Socials',
    },
  },
  admin: {
    group: CollectionGroup.WEB_CONTENT,
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
      relationTo: CollectionSlug.WEB_MEDIA,
    },
  ],
}
