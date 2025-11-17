import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const Plants: CollectionConfig = {
  slug: CollectionSlug.PLANTS,
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
      relationTo: CollectionSlug.MEDIA,
      hasMany: true,
      label: 'Images',
      admin: {
        description: 'Images of the plant',
      },
    },
    {
      name: 'family',
      type: 'relationship',
      relationTo: CollectionSlug.PLANT_FAMILIES,
      required: true,
      label: 'Plant Family',
      admin: {
        description: 'The botanical family this plant belongs to',
      },
    },
    {
      name: 'groups',
      type: 'relationship',
      relationTo: CollectionSlug.PLANT_GROUPS,
      hasMany: true,
      label: 'Plant Groups',
      admin: {
        description: 'The groups this plant belongs to',
      },
    },
  ],
}
