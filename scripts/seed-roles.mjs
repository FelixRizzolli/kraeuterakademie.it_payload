/**
 * Seed script to create initial roles in the database
 * Run this once after deploying the new role system
 *
 * Usage: node scripts/seed-roles.js
 * Or: Add to package.json scripts and run: pnpm seed:roles
 */

import { getPayload } from 'payload'
import config from '../src/payload.config'
import { UserRole, USER_ROLE_LABELS, USER_ROLE_DESCRIPTIONS } from '../src/lib/constants'

async function seedRoles() {
  console.log('🌱 Starting role seeding...')

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const rolesToCreate = [
    {
      name: USER_ROLE_LABELS[UserRole.SUPER_ADMIN],
      slug: UserRole.SUPER_ADMIN,
      description: USER_ROLE_DESCRIPTIONS[UserRole.SUPER_ADMIN],
    },
    {
      name: USER_ROLE_LABELS[UserRole.ADMINISTRATOR],
      slug: UserRole.ADMINISTRATOR,
      description: USER_ROLE_DESCRIPTIONS[UserRole.ADMINISTRATOR],
    },
    {
      name: USER_ROLE_LABELS[UserRole.CONTENT_CREATOR],
      slug: UserRole.CONTENT_CREATOR,
      description: USER_ROLE_DESCRIPTIONS[UserRole.CONTENT_CREATOR],
    },
    {
      name: USER_ROLE_LABELS[UserRole.DASHBOARD_USER],
      slug: UserRole.DASHBOARD_USER,
      description: USER_ROLE_DESCRIPTIONS[UserRole.DASHBOARD_USER],
    },
    {
      name: USER_ROLE_LABELS[UserRole.QUIZ_PLAYER],
      slug: UserRole.QUIZ_PLAYER,
      description: USER_ROLE_DESCRIPTIONS[UserRole.QUIZ_PLAYER],
    },
    {
      name: USER_ROLE_LABELS[UserRole.DEMO_DASHBOARD_USER],
      slug: UserRole.DEMO_DASHBOARD_USER,
      description: USER_ROLE_DESCRIPTIONS[UserRole.DEMO_DASHBOARD_USER],
    },
    {
      name: USER_ROLE_LABELS[UserRole.DEMO_QUIZ_PLAYER],
      slug: UserRole.DEMO_QUIZ_PLAYER,
      description: USER_ROLE_DESCRIPTIONS[UserRole.DEMO_QUIZ_PLAYER],
    },
  ]

  for (const roleData of rolesToCreate) {
    try {
      // Check if role already exists
      const existing = await payload.find({
        collection: 'roles',
        where: {
          slug: {
            equals: roleData.slug,
          },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`⏭️  Role "${roleData.name}" already exists, skipping...`)
        continue
      }

      // Create the role
      const role = await payload.create({
        collection: 'roles',
        data: roleData,
      })

      console.log(`✅ Created role: ${role.name} (${role.slug})`)
    } catch (error) {
      console.error(`❌ Error creating role "${roleData.name}":`, error)
    }
  }

  console.log('🎉 Role seeding complete!')
  process.exit(0)
}

// Run the seed function
seedRoles().catch((error) => {
  console.error('❌ Seeding failed:', error)
  process.exit(1)
})
