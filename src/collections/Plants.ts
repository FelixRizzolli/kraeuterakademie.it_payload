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
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Identifiers',
            de: 'Bezeichner',
          },
          fields: [
            {
              type: 'group',
              label: {
                en: 'Plant Family',
                de: 'Pflanzenfamilie',
              },
              fields: [
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
              ],
            },
            {
              type: 'group',
              label: {
                en: 'Unique Identifiers',
                de: 'Eindeutige Bezeichner',
              },
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
              ],
            },
            {
              name: 'germanNameVariations',
              type: 'array',
              label: {
                en: 'German Name Variations',
                de: 'Variationen des Deutschen Namens',
              },
              fields: [
                {
                  name: 'variation',
                  type: 'text',
                  required: true,
                  label: {
                    en: 'Variation',
                    de: 'Variation',
                  },
                },
              ],
            },
            {
              name: 'scientificNameVariations',
              type: 'array',
              label: {
                en: 'Scientific/Latin Name Variations',
                de: 'Variationen des Wissenschaftlichen/Lateinischen Namens',
              },
              fields: [
                {
                  name: 'variation',
                  type: 'text',
                  required: true,
                  label: {
                    en: 'Variation',
                    de: 'Variation',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Images',
            de: 'Bilder',
          },
          fields: [
            {
              name: 'images',
              type: 'join',
              collection: CollectionSlug.PLANT_IMAGES,
              on: 'plant',
              label: {
                en: 'Images',
                de: 'Bilder',
              },
              admin: {
                description: {
                  en: 'Images that belong to this plant (managed in Plant Images)',
                  de: 'Bilder, die zu dieser Pflanze gehören (in Pflanzenbilder verwalten)',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Properties',
            de: 'Eigenschaften',
          },
          fields: [
            {
              type: 'group',
              label: {
                en: 'Plant Groups',
                de: 'Pflanzengruppen',
              },
              fields: [
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
              ],
            },
            {
              type: 'group',
              label: {
                en: 'Plant Properties',
                de: 'Pflanzeneigenschaften',
              },
              fields: [
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
            },
            {
              type: 'group',
              label: {
                en: 'Other',
                de: 'Weiteres',
              },
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
                  admin: {
                    description: {
                      en: 'Recognition features of this plant',
                      de: 'Erkennungsmerkmale dieser Pflanze',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
