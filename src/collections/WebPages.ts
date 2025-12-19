import { CollectionConfig } from 'payload'
import { webBlocks } from '../blocks/web'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'

export const WebPages: CollectionConfig = {
  slug: CollectionSlug.WEB_PAGES,
  admin: {
    useAsTitle: 'title',
    group: CollectionGroup.WEBCONTENT,
  },
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
