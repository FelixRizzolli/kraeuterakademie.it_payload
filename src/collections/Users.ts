import type { CollectionConfig } from 'payload'
import { CollectionSlug, UserRole } from '../lib/constants'
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
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        // Automatically assign super-admin role to the first user
        if (operation === 'create') {
          const existingUsers = await req.payload.find({
            collection: CollectionSlug.USERS,
            limit: 1,
            pagination: false,
          })

          // If this is the first user and no roles are assigned, assign super-admin
          if (existingUsers.docs.length === 0 && (!data.roles || data.roles.length === 0)) {
            // Find the super-admin role
            const superAdminRole = await req.payload.find({
              collection: CollectionSlug.ROLES,
              where: {
                slug: {
                  equals: UserRole.SUPER_ADMIN,
                },
              },
              limit: 1,
            })

            if (superAdminRole.docs.length > 0) {
              data.roles = [superAdminRole.docs[0].id]
            }
          }
        }
        return data
      },
    ],
  },
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
        // Hide roles field during first user creation (will be auto-assigned as super-admin)
        condition: (data, siblingData, { user }) => {
          // Show field if there's an authenticated user (not first user creation)
          return Boolean(user)
        },
      },
      access: {
        // Only administrators can modify roles
        create: isAdministratorFieldLevel,
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
