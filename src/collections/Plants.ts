import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const Plants: CollectionConfig = {
  slug: CollectionSlug.PLANTS,
  labels: {
    singular: {
      en: 'Plant',
      de: 'Pflanze',
    },
    plural: {
      en: 'Plants',
      de: 'Pflanzen',
    },
  },
  admin: {
    useAsTitle: 'germanName',
    defaultColumns: ['germanName', 'latinName', 'family'],
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
          en: 'German name of the plant',
          de: 'Deutscher Name der Pflanze',
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
          en: 'Scientific/Latin name of the plant',
          de: 'Wissenschaftlicher/Lateinischer Name der Pflanze',
        },
      },
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: CollectionSlug.WEB_MEDIA,
      hasMany: true,
      label: {
        en: 'Images',
        de: 'Bilder',
      },
      admin: {
        description: {
          en: 'Images of the plant',
          de: 'Bilder der Pflanze',
        },
      },
    },
    {
      name: 'family',
      type: 'relationship',
      relationTo: CollectionSlug.PLANT_FAMILIES,
      required: true,
      label: {
        en: 'Plant Family',
        de: 'Pflanzenfamilie',
      },
      admin: {
        description: {
          en: 'The botanical family this plant belongs to',
          de: 'Die botanische Familie, zu der diese Pflanze gehört',
        },
      },
    },
    {
      name: 'groups',
      type: 'relationship',
      relationTo: CollectionSlug.PLANT_GROUPS,
      hasMany: true,
      label: {
        en: 'Plant Groups',
        de: 'Pflanzengruppen',
      },
      admin: {
        description: {
          en: 'The groups this plant belongs to',
          de: 'Die Gruppen, zu denen diese Pflanze gehört',
        },
      },
    },
    {
      name: 'toxicityLevel',
      type: 'relationship',
      relationTo: CollectionSlug.PLANT_TOXICITY_LEVELS,
      label: {
        en: 'Toxicity Level',
        de: 'Giftigkeitsstufe',
      },
      admin: {
        description: {
          en: 'The toxicity level of this plant, if applicable',
          de: 'Die Giftigkeitsstufe dieser Pflanze, falls zutreffend',
        },
      },
    },
  ],
}
