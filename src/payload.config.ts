// storage-adapter-import-placeholder
import { en } from '@payloadcms/translations/languages/en'
import { de } from '@payloadcms/translations/languages/de'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { seoPlugin } from '@payloadcms/plugin-seo'
import { CollectionSlug } from './lib/constants'

// General Content
//  -> Globals
import { Contact } from './globals/Contact'
//  -> Collections
import { Users } from './collections/Users'
import { Roles } from './collections/Roles'

// Public Web Content
//  -> Globals
import { PublicFooter } from './globals/PublicFooter'
import { PublicHeader } from './globals/PublicHeader'
import { PublicSidebar } from './globals/PublicSidebar'
//  -> Collections
import { PublicImages } from './collections/PublicImages'
import { PublicImageCategories } from './collections/PublicImageCategories'
import { PublicPages } from './collections/PublicPages'
import { PublicPartners } from './collections/PublicPartners'
import { PublicSocials } from './collections/PublicSocials'
import { PublicBooks } from './collections/PublicBooks'
import { PublicTextBlocks } from './collections/PublicTextBlocks'

// Dashboard Content

// Botanical Content
import { Plants } from './collections/Plants'
import { PlantFamilies } from './collections/PlantFamilies'
import { PlantGroups } from './collections/PlantGroups'
import { PlantToxicityLevels } from './collections/PlantToxicityLevels'
import { PlantRecognitionFeatures } from './collections/PlantRecognitionFeatures'
import { PlantImages } from './collections/PlantImages'
import { PlantSubstances } from './collections/PlantSubstances'
import { PlantEffects } from './collections/PlantEffects'
import { PlantParts } from './collections/PlantParts'

// Course Content
import { Courses } from './collections/Courses'
import { CourseModules } from './collections/CourseModules'
import { CourseExcursions } from './collections/CourseExcoursions'
import { CoursePracticeUnits } from './collections/CoursePracticeUnits'
import { CourseSpeakers } from './collections/CourseSpeakers'
import { CourseGardens } from './collections/CourseGardens'
import { CourseSharedDocuments } from './collections/CourseSharedDocuments'
import { CourseVideoLesson } from './collections/CourseVideoLesson'

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
    timezones: {
      defaultTimezone: 'Europe/Rome',
    },
    meta: {
      titleSuffix: '- Kraeuterakademie Admin',
    },
    autoLogin:
      process.env.NODE_ENV === 'development'
        ? {
            email: 'dev@payloadcms.com',
            password: 'test',
            prefillOnly: true,
          }
        : false,
  },
  routes: {
    admin: '/admin',
    api: '/api',
    graphQL: '/api/graphql',
    graphQLPlayground: '/api/graphql-playground',
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
    CourseVideoLesson,
    // Botanical
    Plants,
    PlantFamilies,
    PlantGroups,
    PlantToxicityLevels,
    PlantRecognitionFeatures,
    PlantImages,
    PlantParts,
    PlantSubstances,
    PlantEffects,
    // Public Web Content
    PublicImages,
    PublicImageCategories,
    PublicPages,
    PublicPartners,
    PublicSocials,
    PublicBooks,
    PublicTextBlocks,
  ],
  globals: [PublicFooter, PublicHeader, PublicSidebar, Contact],
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
      uploadsCollection: CollectionSlug.PUBLIC_IMAGES,
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
