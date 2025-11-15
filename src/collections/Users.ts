import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'role'],
  },
  auth: true,
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'participant',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Participant', value: 'participant' },
      ],
      admin: {
        description:
          'User role: Admin can manage everything, Participant can access Dashboard/Quiz',
      },
    },
    {
      name: 'enrolledCourses',
      type: 'join',
      collection: 'courses',
      on: 'participants',
      label: 'Enrolled Courses',
      admin: {
        description: 'Courses this participant is enrolled in',
        condition: (data) => data.role === 'participant',
      },
    },
    {
      name: 'attendedModules',
      type: 'join',
      collection: 'course-modules',
      on: 'participants',
      label: 'Attended Modules',
      admin: {
        description: 'Modules this participant has attended',
        condition: (data) => data.role === 'participant',
      },
    },
  ],
}
