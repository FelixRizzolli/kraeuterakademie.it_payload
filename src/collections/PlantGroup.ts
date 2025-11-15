import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const PlantGroup: CollectionConfig = {
  slug: 'plant-groups',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    group: 'Botanical',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
      label: 'Description',
    },
  ],
}
