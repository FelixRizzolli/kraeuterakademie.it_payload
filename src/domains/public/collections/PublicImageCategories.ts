import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const PublicImageCategories: CollectionConfig = {
  slug: CollectionSlug.PUBLIC_IMAGE_CATEGORIES,
  labels: {
    singular: {
      en: 'Public Image Category',
      de: 'Public Bildkategorie',
    },
    plural: {
      en: 'Public Image Categories',
      de: 'Public Bildkategorien',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
    group: CollectionGroup.PUBLIC_CONTENT,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
    },
    {
      name: 'showInGallery',
      type: 'checkbox',
      label: {
        en: 'Show in Gallery',
        de: 'In Galerie anzeigen',
      },
      defaultValue: false,
    },
  ],
}
