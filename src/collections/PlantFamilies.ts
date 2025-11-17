import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const PlantFamilies: CollectionConfig = {
  slug: CollectionSlug.PLANT_FAMILIES,
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
