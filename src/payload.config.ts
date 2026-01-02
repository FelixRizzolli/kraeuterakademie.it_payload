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
import { Contact } from './domains/shared/globals/Contact'
//  -> Collections
import { Users } from './domains/shared/collections/Users'
import { Roles } from './domains/shared/collections/Roles'

// Public Web Content
//  -> Globals
import { PublicFooter } from './domains/public/globals/PublicFooter'
import { PublicHeader } from './domains/public/globals/PublicHeader'
import { PublicSidebar } from './domains/public/globals/PublicSidebar'
//  -> Collections
import { PublicImages } from './domains/public/collections/PublicImages'
import { PublicImageCategories } from './domains/public/collections/PublicImageCategories'
import { PublicPages } from './domains/public/collections/PublicPages'
import { PublicPartners } from './domains/public/collections/PublicPartners'
import { PublicSocials } from './domains/public/collections/PublicSocials'
import { PublicBooks } from './domains/public/collections/PublicBooks'
import { PublicTextBlocks } from './domains/public/collections/PublicTextBlocks'

// Dashboard Content
//  -> Globals
import { DashboardGlobal } from './domains/dashboard/globals/DashboardGlobal'
//  -> Collections
import { DashboardTextBlocks } from './domains/dashboard/collections/DashboardTextBlocks'
import { DashboardImages } from './domains/dashboard/collections/DashboardImages'
import { DashboardHelpPages } from './domains/dashboard/collections/DashboardHelpPages'
import { DashboardTicketCategories } from './domains/dashboard/collections/DashboardTicketCategories'
import { DashboardTickets } from './domains/dashboard/collections/DashboardTickets'
import { DashboardChangelogs } from './domains/dashboard/collections/DashboardChangelogs'

// Botanical Content
import { Plants } from './domains/botanical/collections/Plants'
import { PlantFamilies } from './domains/botanical/collections/PlantFamilies'
import { PlantGroups } from './domains/botanical/collections/PlantGroups'
import { PlantToxicityLevels } from './domains/botanical/collections/PlantToxicityLevels'
import { PlantRecognitionFeatures } from './domains/botanical/collections/PlantRecognitionFeatures'
import { PlantImages } from './domains/botanical/collections/PlantImages'
import { PlantSubstances } from './domains/botanical/collections/PlantSubstances'
import { PlantEffects } from './domains/botanical/collections/PlantEffects'
import { PlantParts } from './domains/botanical/collections/PlantParts'

// Course Content
import { Courses } from './domains/course/collections/Courses'
import { CourseModules } from './domains/course/collections/CourseModules'
import { CourseExcursions } from './domains/course/collections/CourseExcoursions'
import { CoursePracticeUnits } from './domains/course/collections/CoursePracticeUnits'
import { CourseSpeakers } from './domains/course/collections/CourseSpeakers'
import { CourseGardens } from './domains/course/collections/CourseGardens'
import { CourseSharedDocuments } from './domains/course/collections/CourseSharedDocuments'
import { CourseVideoLesson } from './domains/course/collections/CourseVideoLesson'

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
    // Dashboard Web Content
    DashboardTextBlocks,
    DashboardImages,
    DashboardHelpPages,
    DashboardTicketCategories,
    DashboardTickets,
    DashboardChangelogs,
  ],
  globals: [PublicFooter, PublicHeader, PublicSidebar, Contact, DashboardGlobal],
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
