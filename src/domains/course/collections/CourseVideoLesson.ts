import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const CourseVideoLesson: CollectionConfig = {
  slug: CollectionSlug.COURSE_VIDEO_LESSONS,
  labels: {
    singular: {
      en: 'Course Video Lesson',
      de: 'Kurs Video Lektion',
    },
    plural: {
      en: 'Course Video Lessons',
      de: 'Kurs Video Lektionen',
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
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: {
            en: 'Video Lesson Title',
            de: 'Video Lektionstitel',
          },
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          label: {
            en: 'Video Lesson Slug',
            de: 'Video Lektion Slug',
          },
        },
      ],
    },
    {
      name: 'youtubeURL',
      label: {
        en: 'YouTube URL',
        de: 'YouTube URL',
      },
      type: 'text',
    },
  ],
}
