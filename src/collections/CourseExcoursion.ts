import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const CourseExcoursion: CollectionConfig = {
  slug: CollectionSlug.COURSE_EXCOURSION,
  labels: {
    singular: {
      en: 'Course Excoursion',
      de: 'Kurs Exkursion',
    },
    plural: {
      en: 'Course Excoursions',
      de: 'Kurs Exkursionen',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
    group: CollectionGroup.COURSES,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Excoursion Title',
        de: 'Exkursionstitel',
      },
    },
  ],
}
