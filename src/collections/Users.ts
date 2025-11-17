import type { CollectionConfig } from 'payload'
import { CollectionSlug } from '../lib/constants'
import { administratorOrSelf, isAdministratorFieldLevel } from '../lib/access'

export const Users: CollectionConfig = {
  slug: CollectionSlug.USERS,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'roles'],
    description: 'Manage user accounts and their roles',
  },
  auth: {
    // Require email verification for non-admin roles
    verify: false, // Set to true in production
  },
  access: administratorOrSelf,
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
      name: 'roles',
      type: 'relationship',
      relationTo: CollectionSlug.ROLES,
      hasMany: true,
      required: true,
      label: 'Roles',
      admin: {
        description: 'User can have multiple roles (e.g., Dashboard User + Quiz Player)',
      },
      access: {
        // Only administrators can modify roles
        update: isAdministratorFieldLevel,
      },
    },
    {
      name: 'enrolledCourses',
      type: 'join',
      collection: CollectionSlug.COURSES,
      on: 'participants',
      label: 'Enrolled Courses',
      admin: {
        description: 'Courses this user is enrolled in',
        condition: (data) => {
          // Show if user has dashboard access role
          return (
            data.roles?.some(
              (role: any) =>
                role?.slug === 'dashboard-user' ||
                role?.slug === 'demo-dashboard-user' ||
                role?.slug === 'administrator' ||
                role?.slug === 'super-admin',
            ) || false
          )
        },
      },
    },
    {
      name: 'attendedModules',
      type: 'join',
      collection: CollectionSlug.COURSE_MODULES,
      on: 'participants',
      label: 'Attended Modules',
      admin: {
        description: 'Modules this user has attended',
        condition: (data) => {
          // Show if user has dashboard access role
          return (
            data.roles?.some(
              (role: any) =>
                role?.slug === 'dashboard-user' ||
                role?.slug === 'demo-dashboard-user' ||
                role?.slug === 'administrator' ||
                role?.slug === 'super-admin',
            ) || false
          )
        },
      },
    },
  ],
}
