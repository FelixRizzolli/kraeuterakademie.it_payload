import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const CourseSharedDocuments: CollectionConfig = {
  slug: CollectionSlug.COURSE_SHARED_DOCUMENTS,
  labels: {
    singular: {
      en: 'Course Shared Document',
      de: 'Kurs Geteiltes Dokument',
    },
    plural: {
      en: 'Course Shared Documents',
      de: 'Kurs Geteilte Dokumente',
    },
  },
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename'],
    group: CollectionGroup.COURSES,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'filename',
      type: 'text',
      required: true,
      label: {
        en: 'Filename',
        de: 'Dateiname',
      },
    },
    {
      name: 'filetype',
      type: 'text',
      required: true,
      label: {
        en: 'Filetype',
        de: 'Dateityp',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: {
        en: 'URL to Document',
        de: 'URL zum Dokument',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
    },
  ],
}
