import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Course: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'place', 'status'],
    group: 'Courses',
  },
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
      options: [
        { label: 'Unterland', value: 'unterland' },
        { label: 'Pustertal', value: 'pustertal' },
        { label: 'Vinschgau', value: 'vinschgau' },
      ],
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
      defaultValue: 'open',
      label: 'Status',
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Running', value: 'running' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        description: 'Current status of the course',
      },
    },
    {
      name: 'participants',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      label: 'Course Participants',
      admin: {
        description: 'Users enrolled in this course',
      },
      filterOptions: {
        role: {
          equals: 'participant',
        },
      },
    },
    {
      name: 'modules',
      type: 'join',
      collection: 'course-modules',
      on: 'course',
      label: 'Modules',
      admin: {
        description: 'Modules that belong to this course',
      },
    },
  ],
}
