import type { CollectionConfig } from 'payload'

export const Plant: CollectionConfig = {
  slug: 'plants',
  admin: {
    useAsTitle: 'germanName',
    defaultColumns: ['germanName', 'latinName', 'family'],
    group: 'Botanical',
  },
  fields: [
    {
      name: 'germanName',
      type: 'text',
      required: true,
      label: 'German Name',
      admin: {
        description: 'German name of the plant',
      },
    },
    {
      name: 'latinName',
      type: 'text',
      required: true,
      label: 'Latin Name',
      admin: {
        description: 'Scientific/Latin name of the plant',
      },
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      label: 'Images',
      admin: {
        description: 'Images of the plant',
      },
    },
    {
      name: 'family',
      type: 'relationship',
      relationTo: 'plant-families',
      required: true,
      label: 'Plant Family',
      admin: {
        description: 'The botanical family this plant belongs to',
      },
    },
    {
      name: 'groups',
      type: 'relationship',
      relationTo: 'plant-groups',
      hasMany: true,
      label: 'Plant Groups',
      admin: {
        description: 'The groups this plant belongs to',
      },
    },
  ],
}
