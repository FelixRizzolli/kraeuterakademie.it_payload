# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-12-29

### Fixed

- Update static directory path for uploads in PlantImages collection

## [1.0.1] - 2025-12-29

### Added

- Added Healthcheck endpoint at `/health` with database connection check to verify Payload CMS is running
- Added meta title suffix and configure auto login for development environment in Payload CMS admin panel

### Changed

- Removed frontend page, routes and styles as PayloadCMS is only used as a headless CMS backend now

## [1.0.0] - 2025-12-29

### Added

- Added Payload Translations plugin for German and English support of the CMS admin panel
- Added Payload SEO plugin for managing SEO metadata within Payload CMS
- Created collections for managing web content:
  - WebPages with flexible content blocks:
    - WebAccordions
    - WebAnimatedText
    - WebBookList
    - WebCourseList
    - WebHeroLarge
    - WebHeroSmall
    - WebHighlightedLinks
    - WebImageText
    - WebInfos
    - WebMoodPicture
    - WebSwiperCard
    - WebSwiperSimple
    - WebTextElement
    - WebTitleElement
  - WebBooks
  - WebImages
  - WebImageCategories
  - WebPartners
  - WebSocials
  - WebTextBlocks
- Created collections for managing course content:
  - Courses
  - CourseSharedDocuments
  - CourseVideoLessons
  - CourseModules
  - CoursePracticeUnits
  - CourseGardens
  - CourseExcursions
  - CourseSpeakers
- Created collections for managing plants for a plant quiz which will come in the future and other features:
  - Plants
  - PlantFamilies
  - PlantGroups
  - PlantImages
  - PlantRecognitionFeatures
  - PlantToxicityLevels
  - PlantParts
  - PlantSubstances
  - PlantEffects
- Added some custom fields to the User collection and added a Roles collection for role based access control
- Added the following globals:
  - Contact
  - WebFooter
  - WebHeader
  - WebSidebar
- Added enums for CollectionSlug, CollectionGroup, ... for better type safety
- Added access helper functions and predefined access objects for easier access control management
- Added ArrayRowLabel admin components for better UX in the admin panel:
  - LinkArrayRowLabel
  - PlantPartSubstancesArrayRowLabel

### Changed

- **Production Ready**: Payload CMS is now the primary backend for kraeuterakademie.it
- Now serving the API at `api.kraeuterakademie.it` (replacing Strapi)
- Full integration with Nuxt frontend
- Set the default locale to German and the default time zone to Europe/Rome

- updated dependencies
  - @payloadcms/db-postgres 3.63.0 → 3.69.0
  - @payloadcms/next 3.63.0 → 3.69.0
  - @payloadcms/richtext-lexical 3.63.0 → 3.69.0
  - @payloadcms/ui 3.63.0 → 3.69.0
  - cross-env ^7.0.3 → 10.1.0
  - dotenv 16.4.7 → 17.2.3
  - graphql ^16.8.1 → 16.12.0
  - next 15.4.7 → 15.5.9
  - payload 3.63.0 → 3.69.0
  - react 19.1.0 → 19.2.3
  - react-dom 19.1.0 → 19.2.3
  - sharp 0.34.2 → 0.34.5
- added dependencies
  - @payloadcms/plugin-seo@^3.69.0
  - @payloadcms/translations@^3.69.0
- updated devDependencies
  - @playwright/test 1.56.1 → 1.57.0
  - @testing-library/react 16.3.0 → 16.3.1
  - @types/node ^22.5.4 → 22.19.3
  - @types/react 19.1.8 → 19.2.7
  - @types/react-dom 19.1.6 → 19.2.3
  - @vitejs/plugin-react 4.5.2 → 5.1.2
  - eslint ^9.16.0 → 9.39.2
  - eslint-config-next 15.4.7 → 15.5.9
  - jsdom 26.1.0 → 27.3.0
  - playwright 1.56.1 → 1.57.0
  - playwright-core 1.56.1 → 1.57.0
  - prettier ^3.4.2 → 3.7.4
  - vite-tsconfig-paths 5.1.4 → 6.0.3
  - vitest 3.2.3 → 4.0.16
- added devDependencies
  - tsx@4.21.0

## [0.1.1] - 2025-11-13

### Fixed

- Fixed Docker image build issues

## [0.1.0] - 2025-11-13

Initial release of the Payload CMS backend for kraeuterakademie.it with an empty template.
