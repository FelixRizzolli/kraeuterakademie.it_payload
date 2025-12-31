import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const PlantRecognitionFeatures: CollectionConfig = {
  slug: CollectionSlug.PLANT_RECOGNITION_FEATURES,
  labels: {
    singular: {
      en: 'Plant Recognition Feature',
      de: 'Pflanzen Erkennungsmerkmal',
    },
    plural: {
      en: 'Plant Recognition Features',
      de: 'Pflanzen Erkennungsmerkmale',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
    group: CollectionGroup.BOTANICAL,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Recognition Feature Title',
        de: 'Erkennungsmerkmal Titel',
      },
    },
  ],
}
