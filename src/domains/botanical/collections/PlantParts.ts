import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const PlantParts: CollectionConfig = {
  slug: CollectionSlug.PLANT_PARTS,
  labels: {
    singular: {
      en: 'Plant Part',
      de: 'Pflanzen Teil',
    },
    plural: {
      en: 'Plant Parts',
      de: 'Pflanzen Teile',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    group: CollectionGroup.BOTANICAL,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'Name',
        de: 'Name',
      },
    },
  ],
}
