/**
 * Centralized constants and enums for the application
 * This file provides type-safe constants to avoid typos and improve maintainability
 */

/**
 * Admin Panel Collection Groups
 * Used to organize collections in the Payload admin panel sidebar
 */
export enum CollectionGroup {
  COURSES = 'Courses',
  BOTANICAL = 'Botanical',
  CONTENT = 'Content',
}

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
export enum CollectionSlug {
  USERS = 'users',
  MEDIA = 'media',
  WEB_PAGES = 'web-pages',
  COURSES = 'courses',
  COURSE_MODULES = 'course-modules',
  PLANTS = 'plants',
  PLANT_FAMILIES = 'plant-families',
  PLANT_GROUPS = 'plant-groups',
}
