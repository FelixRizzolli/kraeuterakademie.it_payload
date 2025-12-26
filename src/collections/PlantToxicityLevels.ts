import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const PlantToxicityLevels: CollectionConfig = {
  slug: CollectionSlug.PLANT_TOXICITY_LEVELS,
  labels: {
    singular: {
      en: 'Plant Toxicity Level',
      de: 'Pflanzen Giftigkeitsstufe',
    },
    plural: {
      en: 'Plant Toxicity Levels',
      de: 'Pflanzen Giftigkeitsstufen',
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
        en: 'Toxicity Level Title',
        de: 'Giftigkeitsstufe Titel',
      },
    },
  ],
}
