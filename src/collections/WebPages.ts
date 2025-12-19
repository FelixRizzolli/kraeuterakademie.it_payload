import { CollectionConfig } from 'payload'
import { webBlocks } from '../blocks/web'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { contentCreatorWritePublicRead } from '@/lib/access'

export const WebPages: CollectionConfig = {
  slug: CollectionSlug.WEB_PAGES,
  admin: {
    useAsTitle: 'title',
    group: CollectionGroup.WEB_CONTENT,
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: webBlocks,
      required: false,
    },
  ],
}
