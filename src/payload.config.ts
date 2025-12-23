// storage-adapter-import-placeholder
import { en } from '@payloadcms/translations/languages/en'
import { de } from '@payloadcms/translations/languages/de'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Roles } from './collections/Roles'
import { WebMedia } from './collections/WebMedia'
import { WebPages } from './collections/WebPages'
import { Courses } from './collections/Courses'
import { CourseModules } from './collections/CourseModules'
import { Plants } from './collections/Plants'
import { PlantFamilies } from './collections/PlantFamilies'
import { PlantGroups } from './collections/PlantGroups'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { CollectionSlug } from './lib/constants'
import { Sidebar } from './globals/Sidebar'
import { Contact } from './globals/Contact'
import { WebPartners } from './collections/WebPartners'
import { WebSocials } from './collections/WebSocials'
import { WebBooks } from './collections/WebBooks'
import { WebTextBlocks } from './collections/WebTextBlocks'
import { CourseExcursions } from './collections/CourseExcoursions'
import { CoursePracticeUnits } from './collections/CoursePracticeUnits'
import { CourseSpeakers } from './collections/CourseSpeakers'
import { CourseGardens } from './collections/CourseGardens'
import { CourseSharedDocuments } from './collections/CourseSharedDocuments'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  cors: '*',
  i18n: {
    supportedLanguages: { en, de },
    fallbackLanguage: 'en',
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    // Administration
    Users,
    Roles,
    // Courses
    Courses,
    CourseModules,
    CourseExcursions,
    CoursePracticeUnits,
    CourseSpeakers,
    CourseGardens,
    CourseSharedDocuments,
    // Botanical
    Plants,
    PlantFamilies,
    PlantGroups,
    // Web
    WebMedia,
    WebPages,
    WebPartners,
    WebSocials,
    WebBooks,
    WebTextBlocks,
  ],
  globals: [Footer, Header, Sidebar, Contact],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PAYLOAD_DATABASE_URI || '',
    },
    push: process.env.NODE_ENV === 'production' ? false : true,
  }),
  sharp,
  plugins: [
    seoPlugin({
      uploadsCollection: CollectionSlug.WEB_MEDIA,
      generateTitle: ({ doc }) => `kraeuterakademie.it — ${doc.title}`,
      generateURL: ({ doc }) => `https://kraeuterakademie.it/${doc?.slug}`,
      generateDescription: ({ doc }) => doc.excerpt,
    }),
  ],
  graphQL: {
    disable: false,
    disablePlaygroundInProduction: false,
  },
})
