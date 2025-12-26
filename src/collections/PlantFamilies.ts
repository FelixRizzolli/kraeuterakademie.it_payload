import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const PlantFamilies: CollectionConfig = {
  slug: CollectionSlug.PLANT_FAMILIES,
  labels: {
    singular: {
      en: 'Plant Family',
      de: 'Pflanzenfamilie',
    },
    plural: {
      en: 'Plant Families',
      de: 'Pflanzenfamilien',
    },
  },
  admin: {
    useAsTitle: 'germanName',
    defaultColumns: ['germanName', 'latinName'],
    group: CollectionGroup.BOTANICAL,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'germanName',
      type: 'text',
      required: true,
      label: {
        en: 'German Name',
        de: 'Deutscher Name',
      },
      admin: {
        description: {
          en: 'German name of the plant family',
          de: 'Deutscher Name der Pflanzenfamilie',
        },
      },
    },
    {
      name: 'scientificName',
      type: 'text',
      required: true,
      label: {
        en: 'Scientific/Latin Name',
        de: 'Wissenschaftlicher/Lateinischer Name',
      },
      admin: {
        description: {
          en: 'Scientific/Latin name of the plant family',
          de: 'Wissenschaftlicher/Lateinischer Name der Pflanzenfamilie',
        },
      },
    },
  ],
}
