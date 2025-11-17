import type { CollectionConfig } from 'payload'
import {
  CollectionGroup,
  CollectionSlug,
  USER_ROLE_OPTIONS,
  USER_ROLE_DESCRIPTIONS,
} from '../lib/constants'

export const Roles: CollectionConfig = {
  slug: CollectionSlug.ROLES,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'description'],
    group: CollectionGroup.CONTENT,
    description: 'Manage user roles and permissions',
  },
  access: {
    // Only super admins can manage roles
    create: ({ req: { user } }) => {
      if (!user) return false
      // Check if user has roles array and any role with slug 'super-admin'
      const roles = (user as any).roles || []
      return roles.some((role: any) => {
        const roleSlug = typeof role === 'object' && role !== null ? role.slug : null
        return roleSlug === 'super-admin'
      })
    },
    read: () => true, // Everyone can read roles (needed for user management)
    update: ({ req: { user } }) => {
      if (!user) return false
      const roles = (user as any).roles || []
      return roles.some((role: any) => {
        const roleSlug = typeof role === 'object' && role !== null ? role.slug : null
        return roleSlug === 'super-admin'
      })
    },
    delete: ({ req: { user } }) => {
      if (!user) return false
      const roles = (user as any).roles || []
      return roles.some((role: any) => {
        const roleSlug = typeof role === 'object' && role !== null ? role.slug : null
        return roleSlug === 'super-admin'
      })
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Role Name',
      admin: {
        description: 'Display name of the role',
      },
    },
    {
      name: 'slug',
      type: 'select',
      required: true,
      unique: true,
      label: 'Role Slug',
      options: USER_ROLE_OPTIONS,
      admin: {
        description: 'Unique identifier for the role',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: {
        description: 'What can users with this role do?',
      },
      hooks: {
        beforeChange: [
          ({ value, siblingData }) => {
            // Auto-populate description if not provided
            if (!value && siblingData.slug) {
              return (
                USER_ROLE_DESCRIPTIONS[siblingData.slug as keyof typeof USER_ROLE_DESCRIPTIONS] ||
                ''
              )
            }
            return value
          },
        ],
      },
    },
  ],
}
