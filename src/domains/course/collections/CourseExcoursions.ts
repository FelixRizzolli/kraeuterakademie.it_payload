import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const CourseExcursions: CollectionConfig = {
  slug: CollectionSlug.COURSE_EXCURSIONS,
  labels: {
    singular: {
      en: 'Course Excursion',
      de: 'Kurs Exkursion',
    },
    plural: {
      en: 'Course Excursions',
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
        en: 'Excursion Title',
        de: 'Exkursionstitel',
      },
    },
  ],
}
