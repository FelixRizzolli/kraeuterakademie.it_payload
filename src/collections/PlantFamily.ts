import type { CollectionConfig } from 'payload'

export const PlantFamily: CollectionConfig = {
  slug: 'plant-families',
  admin: {
    useAsTitle: 'germanName',
    defaultColumns: ['germanName', 'latinName'],
    group: 'Botanical',
  },
  fields: [
    {
      name: 'germanName',
      type: 'text',
      required: true,
      label: 'German Name',
      admin: {
        description: 'German name of the plant family',
      },
    },
    {
      name: 'latinName',
      type: 'text',
      required: true,
      label: 'Latin Name',
      admin: {
        description: 'Scientific/Latin name of the plant family',
      },
    },
  ],
}
