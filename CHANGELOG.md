# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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


### Changed

- **Production Ready**: Payload CMS is now the primary backend for kraeuterakademie.it
- Now serving the API at `api.kraeuterakademie.it` (replacing Strapi)
- Full integration with Nuxt frontend
- Set the default locale to German and the default time zone to Europe/Rome

## [0.1.1] - 2025-11-13

### Fixed

- Fixed Docker image build issues

## [0.1.0] - 2025-11-13

Initial release of the Payload CMS backend for kraeuterakademie.it with an empty template.
