import { CollectionConfig } from 'payload'
import { webBlocks } from '../blocks/web'

export const WebPages: CollectionConfig = {
  slug: 'web-pages',
  admin: {
    useAsTitle: 'title',
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
