import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const PlantGroups: CollectionConfig = {
  slug: CollectionSlug.PLANT_GROUPS,
  labels: {
    singular: {
      en: 'Plant Group',
      de: 'Pflanzen Gruppe',
    },
    plural: {
      en: 'Plant Groups',
      de: 'Pflanzen Gruppen',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    group: CollectionGroup.BOTANICAL,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'Name',
        de: 'Name',
      },
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
    },
  ],
}
