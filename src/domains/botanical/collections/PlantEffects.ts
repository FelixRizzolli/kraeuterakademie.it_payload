import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const PlantEffects: CollectionConfig = {
  slug: CollectionSlug.PLANT_EFFECTS,
  labels: {
    singular: {
      en: 'Plant Effect',
      de: 'Pflanzen Wirkung',
    },
    plural: {
      en: 'Plant Effects',
      de: 'Pflanzen Wirkungen',
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
  ],
}
