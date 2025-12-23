import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const CourseSpeaker: CollectionConfig = {
  slug: CollectionSlug.COURSE_SPEAKER,
  labels: {
    singular: {
      en: 'Course Speaker',
      de: 'Kurs Referent',
    },
    plural: {
      en: 'Course Speakers',
      de: 'Kurs Referenten',
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
        en: 'Speaker Name',
        de: 'Referentenname',
      },
    },
  ],
}
