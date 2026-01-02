/**
 * Access control helper functions
 * Reusable access control patterns for collections and fields
 *
 * NOTE: These functions work with many-to-many role relationships.
 * Users can have multiple roles, and we check if they have at least one required role.
 */

import type { Access, FieldAccess } from 'payload'
import { UserRole } from './constants'

/**
 * Helper to check if user has a specific role
 * Works with relationship arrays (can be IDs or populated objects)
 */
const userHasRole = (user: any, roleSlug: UserRole): boolean => {
  if (!user?.roles) return false

  return user.roles.some((role: any) => {
    // Handle both populated objects and IDs
    if (typeof role === 'object' && role !== null) {
      return role.slug === roleSlug
    }
    // If role is just an ID, we can't check the slug directly
    // In this case, the relationship should be populated
    return false
  })
}

/**
 * Helper to check if user has any of the specified roles
 */
const userHasAnyRole = (user: any, roleSlugs: UserRole[]): boolean => {
  return roleSlugs.some((roleSlug) => userHasRole(user, roleSlug))
}

/**
 * Check if user is a super admin (highest level access)
 */
export const isSuperAdmin: Access = ({ req: { user } }) => {
  return userHasRole(user, UserRole.SUPER_ADMIN)
}

/**
 * Check if user is an administrator (can manage courses, plants, etc.)
 */
export const isAdministrator: Access = ({ req: { user } }) => {
  return userHasAnyRole(user, [UserRole.SUPER_ADMIN, UserRole.ADMINISTRATOR])
}

/**
 * Check if user is a content creator (can manage website content)
 */
export const isContentCreator: Access = ({ req: { user } }) => {
  return userHasAnyRole(user, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMINISTRATOR,
    UserRole.CONTENT_CREATOR,
  ])
}

/**
 * Check if user has dashboard access (participant in courses)
 */
export const hasDashboardAccess: Access = ({ req: { user } }) => {
  return userHasAnyRole(user, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMINISTRATOR,
    UserRole.DASHBOARD_USER,
    UserRole.DEMO_DASHBOARD_USER,
  ])
}

/**
 * Check if user has quiz access
 */
export const hasQuizAccess: Access = ({ req: { user } }) => {
  return userHasAnyRole(user, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMINISTRATOR,
    UserRole.QUIZ_PLAYER,
    UserRole.DEMO_QUIZ_PLAYER,
  ])
}

/**
 * Check if user is authenticated
 */
export const isAuthenticated: Access = ({ req: { user } }) => {
  return Boolean(user)
}

/**
 * Check if user is a demo user (read-only access)
 */
export const isDemoUser: Access = ({ req: { user } }) => {
  return userHasAnyRole(user, [UserRole.DEMO_DASHBOARD_USER, UserRole.DEMO_QUIZ_PLAYER])
}

/**
 * Admin or self - user can access their own data or admin can access all
 */
export const isAdministratorOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false
  if (userHasAnyRole(user, [UserRole.SUPER_ADMIN, UserRole.ADMINISTRATOR])) return true

  return {
    id: {
      equals: user.id,
    },
  }
}

/**
 * Field-level access: Super Admin only
 */
export const isSuperAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  return userHasRole(user, UserRole.SUPER_ADMIN)
}

/**
 * Field-level access: Administrator only (Super Admin + Administrator)
 */
export const isAdministratorFieldLevel: FieldAccess = ({ req: { user } }) => {
  return userHasAnyRole(user, [UserRole.SUPER_ADMIN, UserRole.ADMINISTRATOR])
}

/**
 * Field-level access: Content Creator and above
 */
export const isContentCreatorFieldLevel: FieldAccess = ({ req: { user } }) => {
  return userHasAnyRole(user, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMINISTRATOR,
    UserRole.CONTENT_CREATOR,
  ])
}

/**
 * Field-level access: Admin or self
 */
export const isAdministratorOrSelfFieldLevel: FieldAccess = ({ req: { user }, id }) => {
  if (!user) return false
  if (userHasAnyRole(user, [UserRole.SUPER_ADMIN, UserRole.ADMINISTRATOR])) return true
  return user.id === id
}

/**
 * Field-level access: Sensitive personal data (Admin only for read, user can update their own)
 * Used for fields like taxNumber, birthDate, address that should be private
 */
export const sensitivePersonalDataFieldLevel: FieldAccess = ({ req: { user }, id }) => {
  if (!user) return false
  // Admins can always read/write
  if (userHasAnyRole(user, [UserRole.SUPER_ADMIN, UserRole.ADMINISTRATOR])) return true
  // Users can only access their own sensitive data
  return user.id === id
}

/**
 * Standard CRUD access pattern: Administrator only for write, public read
 */
export const administratorWritePublicRead = {
  create: isAdministrator,
  read: () => true,
  update: isAdministrator,
  delete: isAdministrator,
}

/**
 * Standard CRUD access pattern: Content Creator can write, public read
 */
export const contentCreatorWritePublicRead = {
  create: isContentCreator,
  read: () => true,
  update: isContentCreator,
  delete: isContentCreator,
}

/**
 * Standard CRUD access pattern: Administrator only for all operations
 */
export const administratorOnly = {
  create: isAdministrator,
  read: isAdministrator,
  update: isAdministrator,
  delete: isAdministrator,
}

/**
 * Standard CRUD access pattern: Super Admin only for all operations
 */
export const superAdminOnly = {
  create: isSuperAdmin,
  read: isSuperAdmin,
  update: isSuperAdmin,
  delete: isSuperAdmin,
}

/**
 * Allow user creation if admin OR if no users exist yet (first user setup)
 */
export const allowFirstUserCreation: Access = async ({ req: { user, payload } }) => {
  // If user is an administrator, allow
  if (userHasAnyRole(user, [UserRole.SUPER_ADMIN, UserRole.ADMINISTRATOR])) {
    return true
  }

  // Check if there are any users in the database
  const users = await payload.find({
    collection: 'users',
    limit: 1,
    pagination: false,
  })

  // Allow creation if no users exist (first user setup)
  return users.docs.length === 0
}

/**
 * Standard CRUD access pattern: Admin for all, users for their own data
 * Allows first user creation when no users exist
 */
export const administratorOrSelf = {
  create: allowFirstUserCreation,
  read: isAdministratorOrSelf,
  update: isAdministratorOrSelf,
  delete: isAdministrator,
}

/**
 * Export helper functions for custom access control
 */
export { userHasRole, userHasAnyRole }
