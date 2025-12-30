import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const PublicTextBlocks: CollectionConfig = {
  slug: CollectionSlug.PUBLIC_TEXT_BLOCKS,
  labels: {
    singular: {
      en: 'Public Text Block',
      de: 'Public Textblock',
    },
    plural: {
      en: 'Public Text Blocks',
      de: 'Public Textblöcke',
    },
  },
  admin: {
    group: CollectionGroup.PUBLIC_CONTENT,
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
