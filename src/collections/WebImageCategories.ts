import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const WebImageCategories: CollectionConfig = {
  slug: CollectionSlug.WEB_IMAGE_CATEGORIES,
  labels: {
    singular: {
      en: 'Web Image Category',
      de: 'Web Bildkategorie',
    },
    plural: {
      en: 'Web Image Categories',
      de: 'Web Bildkategorien',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
    group: CollectionGroup.WEB_CONTENT,
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
