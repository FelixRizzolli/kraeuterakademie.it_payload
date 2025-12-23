import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const CoursePracticeUnit: CollectionConfig = {
  slug: CollectionSlug.COURSE_PRACTICE_UNIT,
  labels: {
    singular: {
      en: 'Course Practice Unit',
      de: 'Kurs Praxiseinheit',
    },
    plural: {
      en: 'Course Practice Units',
      de: 'Kurs Praxiseinheiten',
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
        en: 'Practice Unit Title',
        de: 'Praxiseinheitstitel',
      },
    },
  ],
}
