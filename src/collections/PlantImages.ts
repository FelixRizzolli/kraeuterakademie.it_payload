import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const PlantImages: CollectionConfig = {
  slug: CollectionSlug.PLANT_IMAGES,
  labels: {
    singular: {
      en: 'Plant Image',
      de: 'Pflanzenbild',
    },
    plural: {
      en: 'Plant Images',
      de: 'Pflanzenbilder',
    },
  },
  admin: {
    group: CollectionGroup.BOTANICAL,
  },
  access: administratorWritePublicRead,
  fields: [
    {
        name: 'recognitionFeatures',
        type: 'relationship',
        relationTo: CollectionSlug.PLANT_RECOGNITION_FEATURES,
        hasMany: true,
        label: {
            en: 'Recognition Features',
            de: 'Erkennungsmerkmale',
        },
    },
    {
        name: 'description',
        type: 'textarea',
        label: {
            en: 'Description',
            de: 'Beschreibung',
        },
    }
  ],
  upload: true,
}
