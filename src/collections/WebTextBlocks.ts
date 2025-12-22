import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const WebTextBlocks: CollectionConfig = {
  slug: CollectionSlug.WEB_TEXT_BLOCKS,
  labels: {
    singular: {
      en: 'Web Text Block',
      de: 'Web Textblock',
    },
    plural: {
      en: 'Web Text Blocks',
      de: 'Web Textblöcke',
    },
  },
  admin: {
    group: CollectionGroup.WEB_CONTENT,
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
    },
  ],
}
