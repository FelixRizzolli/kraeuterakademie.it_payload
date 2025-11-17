import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
  CollectionGroup,
  CollectionSlug,
  COURSE_PLACE_OPTIONS,
  COURSE_STATUS_OPTIONS,
  CourseStatus,
} from '../lib/constants'
import { administratorWritePublicRead } from '../lib/access'

export const Courses: CollectionConfig = {
  slug: CollectionSlug.COURSES,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'place', 'status'],
    group: CollectionGroup.COURSES,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Course Name',
      admin: {
        description: 'Unique course identifier (e.g., K1, K2, K3)',
      },
    },
    {
      name: 'place',
      type: 'select',
      required: true,
      label: 'Place',
      options: COURSE_PLACE_OPTIONS,
      admin: {
        description: 'Location where the course takes place',
      },
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
      label: 'Description',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: CourseStatus.OPEN,
      label: 'Status',
      options: COURSE_STATUS_OPTIONS,
      admin: {
        description: 'Current status of the course',
      },
    },
    {
      name: 'participants',
      type: 'relationship',
      relationTo: CollectionSlug.USERS,
      hasMany: true,
      label: 'Course Participants',
      admin: {
        description: 'Users enrolled in this course',
      },
      // Note: filterOptions removed since we now use roles relationship
      // Filtering will be done in the UI or via custom queries
    },
    {
      name: 'modules',
      type: 'join',
      collection: CollectionSlug.COURSE_MODULES,
      on: 'course',
      label: 'Modules',
      admin: {
        description: 'Modules that belong to this course',
      },
    },
  ],
}
