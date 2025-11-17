/**
 * Central seed orchestrator.
 * Import individual seed modules (which export a function), and run them in sequence.
 * Add more seed modules as `import { seedX } from './seed-x.mjs'` and include them in `seeds`.
 */

import { seedRoles } from './seed-roles.mjs'

const seeds = [
  { name: 'roles', run: seedRoles },

  // Add other seeds here, for example:
  // { name: 'users', run: seedUsers },
]

async function runAll() {
  console.log('🔗 Running seed orchestrator...')

  for (const seed of seeds) {
    console.log(`➡️  Running seed: ${seed.name}`)
    try {
      await seed.run()
      console.log(`✅ Seed finished: ${seed.name}`)
    } catch (err) {
      console.error(`❌ Seed failed: ${seed.name}`, err)
      throw err
    }
  }

  console.log('🎉 All seeds completed')
}

runAll()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('❌ Seeding run failed:', err)
    process.exit(1)
  })
