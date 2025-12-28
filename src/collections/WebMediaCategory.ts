import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const WebMediaCategory: CollectionConfig = {
  slug: CollectionSlug.WEB_MEDIA_CATEGORY,
  labels: {
    singular: {
      en: 'Web Media Category',
      de: 'Web Medienkategorie',
    },
    plural: {
      en: 'Web Media Categories',
      de: 'Web Medienkategorien',
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
