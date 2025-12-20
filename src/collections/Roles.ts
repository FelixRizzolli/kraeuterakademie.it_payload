import type { CollectionConfig } from 'payload'
import {
  CollectionGroup,
  CollectionSlug,
  USER_ROLE_OPTIONS,
  USER_ROLE_DESCRIPTIONS,
} from '../lib/constants'

export const Roles: CollectionConfig = {
  slug: CollectionSlug.ROLES,
  labels: {
    singular: {
      en: 'Role',
      de: 'Rolle',
    },
    plural: {
      en: 'Roles',
      de: 'Rollen',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'description'],
    group: CollectionGroup.ADMINISTRATION,
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
      label: {
        en: 'Role Name',
        de: 'Rollenname',
      },
      admin: {
        description: {
          en: 'Display name of the role',
          de: 'Anzeigename der Rolle',
        },
      },
    },
    {
      name: 'slug',
      type: 'select',
      required: true,
      unique: true,
      label: {
        en: 'Role Slug',
        de: 'Rollen-Slug',
      },
      options: USER_ROLE_OPTIONS,
      admin: {
        description: {
          en: 'Unique identifier for the role',
          de: 'Eindeutiger Bezeichner für die Rolle',
        },
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
      admin: {
        description: {
          en: 'What can users with this role do?',
          de: 'Was Benutzer mit dieser Rolle tun können',
        },
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
