/**
 * Centralized constants and enums for the application
 * This file provides type-safe constants to avoid typos and improve maintainability
 */

/**
 * Admin Panel Collection Groups
 * Used to organize collections in the Payload admin panel sidebar
 */
export enum CollectionGroup {
  ADMINISTRATION = 'Administration',
  WEB_CONTENT = 'Web Content',
  COURSES = 'Courses',
  BOTANICAL = 'Botanical',
  GLOBALS = 'Globals',
}

/**
 * User Roles (as separate entities with many-to-many relationship)
 *
 * Users can have multiple roles simultaneously. For example, a Content Creator
 * can also have the Dashboard User and Quiz Player roles.
 *
 * Role Hierarchy (from highest to lowest access):
 * 1. SUPER_ADMIN - Developers with full system access
 * 2. ADMINISTRATOR - Can manage courses, plants, and administrative content
 * 3. CONTENT_CREATOR - Can manage website content and components
 * 4. DASHBOARD_USER - Can access dashboard.kraeuterakademie.it
 * 5. QUIZ_PLAYER - Can access quiz.kraeuterakademie.it
 * 6. DEMO_DASHBOARD_USER - Demo account access for dashboard
 * 7. DEMO_QUIZ_PLAYER - Demo account access for quiz
 */
export enum UserRole {
  SUPER_ADMIN = 'super-admin',
  ADMINISTRATOR = 'administrator',
  CONTENT_CREATOR = 'content-creator',
  DASHBOARD_USER = 'dashboard-user',
  QUIZ_PLAYER = 'quiz-player',
  DEMO_DASHBOARD_USER = 'demo-dashboard-user',
  DEMO_QUIZ_PLAYER = 'demo-quiz-player',
}

/**
 * User Role Labels
 * Human-readable labels for user roles
 */
export const USER_ROLE_LABELS: Record<UserRole, string> = {
  [UserRole.SUPER_ADMIN]: 'Super Admin (Developer)',
  [UserRole.ADMINISTRATOR]: 'Administrator',
  [UserRole.CONTENT_CREATOR]: 'Content Creator',
  [UserRole.DASHBOARD_USER]: 'Dashboard User',
  [UserRole.QUIZ_PLAYER]: 'Quiz Player',
  [UserRole.DEMO_DASHBOARD_USER]: 'Demo Dashboard User',
  [UserRole.DEMO_QUIZ_PLAYER]: 'Demo Quiz Player',
}

/**
 * User Role Descriptions
 * Detailed descriptions of what each role can do
 */
export const USER_ROLE_DESCRIPTIONS: Record<UserRole, string> = {
  [UserRole.SUPER_ADMIN]:
    'Full system access including developer tools and all administrative functions',
  [UserRole.ADMINISTRATOR]: 'Can manage courses, modules, plants, and other administrative content',
  [UserRole.CONTENT_CREATOR]: 'Can create and edit website content and web components',
  [UserRole.DASHBOARD_USER]: 'Can access the course participant dashboard',
  [UserRole.QUIZ_PLAYER]: 'Can access and play quizzes',
  [UserRole.DEMO_DASHBOARD_USER]: 'Demo account with limited dashboard access',
  [UserRole.DEMO_QUIZ_PLAYER]: 'Demo account with limited quiz access',
}

/**
 * User Role Options
 * Formatted for Payload select fields (used in Role collection)
 */
export const USER_ROLE_OPTIONS = Object.entries(USER_ROLE_LABELS).map(([value, label]) => ({
  label,
  value,
}))

/**
 * Course Status
 * Represents the current state of a course
 */
export enum CourseStatus {
  OPEN = 'open',
  RUNNING = 'running',
  CLOSED = 'closed',
}

/**
 * Course Status Labels
 */
export const COURSE_STATUS_LABELS: Record<CourseStatus, string> = {
  [CourseStatus.OPEN]: 'Open',
  [CourseStatus.RUNNING]: 'Running',
  [CourseStatus.CLOSED]: 'Closed',
}

/**
 * Course Status Options
 * Formatted for Payload select fields
 */
export const COURSE_STATUS_OPTIONS = Object.entries(COURSE_STATUS_LABELS).map(([value, label]) => ({
  label,
  value,
}))

/**
 * Course Locations
 * Supported course locations in South Tyrol
 */
export enum CoursePlace {
  UNTERLAND = 'unterland',
  PUSTERTAL = 'pustertal',
  VINSCHGAU = 'vinschgau',
}

/**
 * Course Place Labels
 */
export const COURSE_PLACE_LABELS: Record<CoursePlace, string> = {
  [CoursePlace.UNTERLAND]: 'Unterland',
  [CoursePlace.PUSTERTAL]: 'Pustertal',
  [CoursePlace.VINSCHGAU]: 'Vinschgau',
}

/**
 * Course Place Options
 * Formatted for Payload select fields
 */
export const COURSE_PLACE_OPTIONS = Object.entries(COURSE_PLACE_LABELS).map(([value, label]) => ({
  label,
  value,
}))

/**
 * Collection Slugs
 * Type-safe collection slugs for relationships and queries
 */
export const CollectionSlug = {
  // Administration
  USERS: 'users',
  ROLES: 'roles',
  // Courses
  COURSES: 'courses',
  COURSE_MODULES: 'course-modules',
  COURSE_EXCURSIONS: 'course-excursions',
  COURSE_PRACTICE_UNITS: 'course-practice-units',
  COURSE_SPEAKERS: 'course-speakers',
  COURSE_GARDENS: 'course-gardens',
  COURSE_SHARED_DOCUMENTS: 'course-shared-documents',
  COURSE_VIDEO_LESSONS: 'course-video-lessons',
  // Botanical
  PLANTS: 'plants',
  PLANT_FAMILIES: 'plant-families',
  PLANT_GROUPS: 'plant-groups',
  PLANT_TOXICITY_LEVELS: 'plant-toxicity-levels',
  PLANT_RECOGNITION_FEATURES: 'plant-recognition-features',
  PLANT_IMAGES: 'plant-images',
  PLANT_SUBSTANCES: 'plant-substances',
  PLANT_EFFECTS: 'plant-effects',
  PLANT_PARTS: 'plant-parts',
  // Web
  WEB_IMAGES: 'web-images',
  WEB_IMAGE_CATEGORIES: 'web-image-categories',
  WEB_PAGES: 'web-pages',
  WEB_PARTNERS: 'web-partners',
  WEB_SOCIALS: 'web-socials',
  WEB_TEXT_BLOCKS: 'web-text-blocks',
  WEB_BOOKS: 'web-books',
} as const

export type CollectionSlug = (typeof CollectionSlug)[keyof typeof CollectionSlug]
