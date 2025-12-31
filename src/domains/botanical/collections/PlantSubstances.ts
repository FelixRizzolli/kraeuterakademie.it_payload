import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const PlantSubstances: CollectionConfig = {
  slug: CollectionSlug.PLANT_SUBSTANCES,
  labels: {
    singular: {
      en: 'Plant Substance',
      de: 'Pflanzen Inhaltsstoff',
    },
    plural: {
      en: 'Plant Substances',
      de: 'Pflanzen Inhaltsstoffe',
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
      type: 'textarea',
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
    },
  ],
}
