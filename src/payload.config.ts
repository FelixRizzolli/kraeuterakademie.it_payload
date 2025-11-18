// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Roles } from './collections/Roles'
import { Media } from './collections/Media'
import { WebPages } from './collections/WebPages'
import { Courses } from './collections/Courses'
import { CourseModules } from './collections/CourseModules'
import { Plants } from './collections/Plants'
import { PlantFamilies } from './collections/PlantFamilies'
import { PlantGroups } from './collections/PlantGroups'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Roles,
    Media,
    WebPages,
    Courses,
    CourseModules,
    Plants,
    PlantFamilies,
    PlantGroups,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PAYLOAD_DATABASE_URI || '',
    },
    push: false,
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
