import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const CourseGarden: CollectionConfig = {
  slug: CollectionSlug.COURSE_GARDEN,
  labels: {
    singular: {
      en: 'Course Garden',
      de: 'Kurs Garten',
    },
    plural: {
      en: 'Course Gardens',
      de: 'Kurs Gärten',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    group: CollectionGroup.COURSES,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'FNL Garden Name',
        de: 'FNL Kräutergartenname',
      },
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      label: {
        en: 'Link to Garden Info',
        de: 'Link zur Garteninfo',
      },
    },
  ],
}
