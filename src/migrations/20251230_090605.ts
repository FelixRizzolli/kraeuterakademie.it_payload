import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_roles_slug" AS ENUM('super-admin', 'administrator', 'content-creator', 'dashboard-user', 'quiz-player', 'demo-dashboard-user', 'demo-quiz-player');
  CREATE TYPE "public"."enum_courses_place" AS ENUM('unterland', 'pustertal', 'vinschgau');
  CREATE TYPE "public"."enum_courses_status" AS ENUM('open', 'running', 'closed');
  CREATE TYPE "public"."spacing_enum" AS ENUM('none', 'small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."style_enum" AS ENUM('light', 'gray', 'dark');
  CREATE TYPE "public"."link_target_enum" AS ENUM('_self', '_blank', '_parent', '_top', '_unfencedTop');
  CREATE TYPE "public"."enum_web_pages_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Course', 'AboutPage', 'ContactPage', 'FAQPage');
  CREATE TYPE "public"."social_icon_enum" AS ENUM('facebook', 'instagram');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar,
  	"last_name" varchar,
  	"notes" varchar,
  	"address_place" varchar,
  	"address_zip" varchar,
  	"address_street" varchar,
  	"birth_date" timestamp(3) with time zone,
  	"birth_place" varchar,
  	"phone" varchar,
  	"tax_number" varchar,
  	"profilename" varchar,
  	"description" varchar,
  	"linkedin" varchar,
  	"instagram" varchar,
  	"facebook" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "users_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"roles_id" integer
  );
  
  CREATE TABLE "roles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" "enum_roles_slug" NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "courses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"place" "enum_courses_place" NOT NULL,
  	"description" jsonb,
  	"status" "enum_courses_status" DEFAULT 'open' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "courses_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"course_shared_documents_id" integer,
  	"course_video_lessons_id" integer
  );
  
  CREATE TABLE "course_modules" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"course_id" integer NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"notes" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "course_modules_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"plants_id" integer,
  	"course_excursions_id" integer,
  	"course_practice_units_id" integer,
  	"course_speakers_id" integer,
  	"course_gardens_id" integer,
  	"course_shared_documents_id" integer
  );
  
  CREATE TABLE "course_excursions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "course_practice_units" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "course_speakers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "course_gardens" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "course_shared_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"filename" varchar NOT NULL,
  	"filetype" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "course_video_lessons" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"youtube_u_r_l" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "plants_german_name_variations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variation" varchar NOT NULL
  );
  
  CREATE TABLE "plants_scientific_name_variations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variation" varchar NOT NULL
  );
  
  CREATE TABLE "plants_plant_part_substances" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"plant_part_id" integer NOT NULL,
  	"plant_substance_id" integer NOT NULL,
  	"plant_effect_id" integer
  );
  
  CREATE TABLE "plants" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"family_id" integer NOT NULL,
  	"german_name" varchar NOT NULL,
  	"scientific_name" varchar NOT NULL,
  	"toxicity_level_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "plants_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"plant_groups_id" integer,
  	"plant_recognition_features_id" integer
  );
  
  CREATE TABLE "plant_families_german_name_variations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variation" varchar NOT NULL
  );
  
  CREATE TABLE "plant_families_scientific_name_variations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variation" varchar NOT NULL
  );
  
  CREATE TABLE "plant_families" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"german_name" varchar NOT NULL,
  	"scientific_name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "plant_groups" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "plant_toxicity_levels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "plant_recognition_features" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "plant_images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"plant_id" integer NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_jpeg_url" varchar,
  	"sizes_thumbnail_jpeg_width" numeric,
  	"sizes_thumbnail_jpeg_height" numeric,
  	"sizes_thumbnail_jpeg_mime_type" varchar,
  	"sizes_thumbnail_jpeg_filesize" numeric,
  	"sizes_thumbnail_jpeg_filename" varchar,
  	"sizes_thumbnail_webp_url" varchar,
  	"sizes_thumbnail_webp_width" numeric,
  	"sizes_thumbnail_webp_height" numeric,
  	"sizes_thumbnail_webp_mime_type" varchar,
  	"sizes_thumbnail_webp_filesize" numeric,
  	"sizes_thumbnail_webp_filename" varchar,
  	"sizes_thumbnail_avif_url" varchar,
  	"sizes_thumbnail_avif_width" numeric,
  	"sizes_thumbnail_avif_height" numeric,
  	"sizes_thumbnail_avif_mime_type" varchar,
  	"sizes_thumbnail_avif_filesize" numeric,
  	"sizes_thumbnail_avif_filename" varchar,
  	"sizes_mobile_jpeg_url" varchar,
  	"sizes_mobile_jpeg_width" numeric,
  	"sizes_mobile_jpeg_height" numeric,
  	"sizes_mobile_jpeg_mime_type" varchar,
  	"sizes_mobile_jpeg_filesize" numeric,
  	"sizes_mobile_jpeg_filename" varchar,
  	"sizes_mobile_webp_url" varchar,
  	"sizes_mobile_webp_width" numeric,
  	"sizes_mobile_webp_height" numeric,
  	"sizes_mobile_webp_mime_type" varchar,
  	"sizes_mobile_webp_filesize" numeric,
  	"sizes_mobile_webp_filename" varchar,
  	"sizes_mobile_avif_url" varchar,
  	"sizes_mobile_avif_width" numeric,
  	"sizes_mobile_avif_height" numeric,
  	"sizes_mobile_avif_mime_type" varchar,
  	"sizes_mobile_avif_filesize" numeric,
  	"sizes_mobile_avif_filename" varchar,
  	"sizes_tablet_jpeg_url" varchar,
  	"sizes_tablet_jpeg_width" numeric,
  	"sizes_tablet_jpeg_height" numeric,
  	"sizes_tablet_jpeg_mime_type" varchar,
  	"sizes_tablet_jpeg_filesize" numeric,
  	"sizes_tablet_jpeg_filename" varchar,
  	"sizes_tablet_webp_url" varchar,
  	"sizes_tablet_webp_width" numeric,
  	"sizes_tablet_webp_height" numeric,
  	"sizes_tablet_webp_mime_type" varchar,
  	"sizes_tablet_webp_filesize" numeric,
  	"sizes_tablet_webp_filename" varchar,
  	"sizes_tablet_avif_url" varchar,
  	"sizes_tablet_avif_width" numeric,
  	"sizes_tablet_avif_height" numeric,
  	"sizes_tablet_avif_mime_type" varchar,
  	"sizes_tablet_avif_filesize" numeric,
  	"sizes_tablet_avif_filename" varchar,
  	"sizes_desktop_jpeg_url" varchar,
  	"sizes_desktop_jpeg_width" numeric,
  	"sizes_desktop_jpeg_height" numeric,
  	"sizes_desktop_jpeg_mime_type" varchar,
  	"sizes_desktop_jpeg_filesize" numeric,
  	"sizes_desktop_jpeg_filename" varchar,
  	"sizes_desktop_webp_url" varchar,
  	"sizes_desktop_webp_width" numeric,
  	"sizes_desktop_webp_height" numeric,
  	"sizes_desktop_webp_mime_type" varchar,
  	"sizes_desktop_webp_filesize" numeric,
  	"sizes_desktop_webp_filename" varchar,
  	"sizes_desktop_avif_url" varchar,
  	"sizes_desktop_avif_width" numeric,
  	"sizes_desktop_avif_height" numeric,
  	"sizes_desktop_avif_mime_type" varchar,
  	"sizes_desktop_avif_filesize" numeric,
  	"sizes_desktop_avif_filename" varchar
  );
  
  CREATE TABLE "plant_images_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"plant_recognition_features_id" integer
  );
  
  CREATE TABLE "plant_parts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "plant_substances" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "plant_effects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "web_images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_jpeg_url" varchar,
  	"sizes_thumbnail_jpeg_width" numeric,
  	"sizes_thumbnail_jpeg_height" numeric,
  	"sizes_thumbnail_jpeg_mime_type" varchar,
  	"sizes_thumbnail_jpeg_filesize" numeric,
  	"sizes_thumbnail_jpeg_filename" varchar,
  	"sizes_thumbnail_webp_url" varchar,
  	"sizes_thumbnail_webp_width" numeric,
  	"sizes_thumbnail_webp_height" numeric,
  	"sizes_thumbnail_webp_mime_type" varchar,
  	"sizes_thumbnail_webp_filesize" numeric,
  	"sizes_thumbnail_webp_filename" varchar,
  	"sizes_thumbnail_avif_url" varchar,
  	"sizes_thumbnail_avif_width" numeric,
  	"sizes_thumbnail_avif_height" numeric,
  	"sizes_thumbnail_avif_mime_type" varchar,
  	"sizes_thumbnail_avif_filesize" numeric,
  	"sizes_thumbnail_avif_filename" varchar,
  	"sizes_mobile_jpeg_url" varchar,
  	"sizes_mobile_jpeg_width" numeric,
  	"sizes_mobile_jpeg_height" numeric,
  	"sizes_mobile_jpeg_mime_type" varchar,
  	"sizes_mobile_jpeg_filesize" numeric,
  	"sizes_mobile_jpeg_filename" varchar,
  	"sizes_mobile_webp_url" varchar,
  	"sizes_mobile_webp_width" numeric,
  	"sizes_mobile_webp_height" numeric,
  	"sizes_mobile_webp_mime_type" varchar,
  	"sizes_mobile_webp_filesize" numeric,
  	"sizes_mobile_webp_filename" varchar,
  	"sizes_mobile_avif_url" varchar,
  	"sizes_mobile_avif_width" numeric,
  	"sizes_mobile_avif_height" numeric,
  	"sizes_mobile_avif_mime_type" varchar,
  	"sizes_mobile_avif_filesize" numeric,
  	"sizes_mobile_avif_filename" varchar,
  	"sizes_tablet_jpeg_url" varchar,
  	"sizes_tablet_jpeg_width" numeric,
  	"sizes_tablet_jpeg_height" numeric,
  	"sizes_tablet_jpeg_mime_type" varchar,
  	"sizes_tablet_jpeg_filesize" numeric,
  	"sizes_tablet_jpeg_filename" varchar,
  	"sizes_tablet_webp_url" varchar,
  	"sizes_tablet_webp_width" numeric,
  	"sizes_tablet_webp_height" numeric,
  	"sizes_tablet_webp_mime_type" varchar,
  	"sizes_tablet_webp_filesize" numeric,
  	"sizes_tablet_webp_filename" varchar,
  	"sizes_tablet_avif_url" varchar,
  	"sizes_tablet_avif_width" numeric,
  	"sizes_tablet_avif_height" numeric,
  	"sizes_tablet_avif_mime_type" varchar,
  	"sizes_tablet_avif_filesize" numeric,
  	"sizes_tablet_avif_filename" varchar,
  	"sizes_desktop_jpeg_url" varchar,
  	"sizes_desktop_jpeg_width" numeric,
  	"sizes_desktop_jpeg_height" numeric,
  	"sizes_desktop_jpeg_mime_type" varchar,
  	"sizes_desktop_jpeg_filesize" numeric,
  	"sizes_desktop_jpeg_filename" varchar,
  	"sizes_desktop_webp_url" varchar,
  	"sizes_desktop_webp_width" numeric,
  	"sizes_desktop_webp_height" numeric,
  	"sizes_desktop_webp_mime_type" varchar,
  	"sizes_desktop_webp_filesize" numeric,
  	"sizes_desktop_webp_filename" varchar,
  	"sizes_desktop_avif_url" varchar,
  	"sizes_desktop_avif_width" numeric,
  	"sizes_desktop_avif_height" numeric,
  	"sizes_desktop_avif_mime_type" varchar,
  	"sizes_desktop_avif_filesize" numeric,
  	"sizes_desktop_avif_filename" varchar
  );
  
  CREATE TABLE "web_images_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"web_image_categories_id" integer
  );
  
  CREATE TABLE "web_image_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"show_in_gallery" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "web_pages_blocks_web_accordions_content_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb
  );
  
  CREATE TABLE "web_pages_blocks_web_accordions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_animatedtext" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_text" varchar NOT NULL,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_book_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_course_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_hero_large" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_image_id" integer NOT NULL,
  	"content_title" varchar NOT NULL,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_hero_small" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_image_id" integer,
  	"content_title" varchar NOT NULL,
  	"content_link_text" varchar,
  	"content_link_href" varchar,
  	"content_link_target" "link_target_enum" DEFAULT '_self',
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_highlighted_links_content_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"target" "link_target_enum" DEFAULT '_self'
  );
  
  CREATE TABLE "web_pages_blocks_web_highlighted_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"content_image_id" integer,
  	"content_text_top" jsonb,
  	"content_text_highlight" varchar,
  	"content_text_bottom" jsonb,
  	"content_link_text" varchar,
  	"content_link_href" varchar,
  	"content_link_target" "link_target_enum" DEFAULT '_self',
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_infos_content_infos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb
  );
  
  CREATE TABLE "web_pages_blocks_web_infos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_link_text" varchar,
  	"content_link_href" varchar,
  	"content_link_target" "link_target_enum" DEFAULT '_self',
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_mood_picture" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_image_id" integer,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_swiper_card_content_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"info" varchar,
  	"date" timestamp(3) with time zone,
  	"title" varchar,
  	"link_text" varchar,
  	"link_href" varchar,
  	"link_target" "link_target_enum" DEFAULT '_self'
  );
  
  CREATE TABLE "web_pages_blocks_web_swiper_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_swiper_large_content_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"infos" varchar,
  	"title" varchar,
  	"description" jsonb,
  	"link_text" varchar,
  	"link_href" varchar,
  	"link_target" "link_target_enum" DEFAULT '_self'
  );
  
  CREATE TABLE "web_pages_blocks_web_swiper_large" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_swiper_simple_content_slides_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "web_pages_blocks_web_swiper_simple_content_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_swiper_simple" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_text_element" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar,
  	"content_content" jsonb NOT NULL,
  	"content_link_text" varchar,
  	"content_link_href" varchar,
  	"content_link_target" "link_target_enum" DEFAULT '_self',
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages_blocks_web_title_element" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_title" varchar NOT NULL,
  	"settings_spacing_margin_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_margin_bottom" "spacing_enum" DEFAULT 'large' NOT NULL,
  	"settings_spacing_padding_top" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_spacing_padding_bottom" "spacing_enum" DEFAULT 'none' NOT NULL,
  	"settings_style" "style_enum" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "web_pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer,
  	"no_index" boolean DEFAULT false,
  	"canonical" varchar,
  	"schema_type" "enum_web_pages_schema_type" DEFAULT 'WebPage',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "web_pages_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "web_pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"web_books_id" integer,
  	"courses_id" integer
  );
  
  CREATE TABLE "web_partners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link_text" varchar,
  	"link_href" varchar,
  	"link_target" "link_target_enum" DEFAULT '_self',
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "web_socials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_text" varchar,
  	"link_href" varchar,
  	"link_target" "link_target_enum" DEFAULT '_self',
  	"icon" "social_icon_enum",
  	"background_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "web_books" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"infos" varchar NOT NULL,
  	"description" jsonb,
  	"cover_id" integer,
  	"link_text" varchar,
  	"link_href" varchar,
  	"link_target" "link_target_enum" DEFAULT '_self',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "web_text_blocks" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"roles_id" integer,
  	"courses_id" integer,
  	"course_modules_id" integer,
  	"course_excursions_id" integer,
  	"course_practice_units_id" integer,
  	"course_speakers_id" integer,
  	"course_gardens_id" integer,
  	"course_shared_documents_id" integer,
  	"course_video_lessons_id" integer,
  	"plants_id" integer,
  	"plant_families_id" integer,
  	"plant_groups_id" integer,
  	"plant_toxicity_levels_id" integer,
  	"plant_recognition_features_id" integer,
  	"plant_images_id" integer,
  	"plant_parts_id" integer,
  	"plant_substances_id" integer,
  	"plant_effects_id" integer,
  	"web_images_id" integer,
  	"web_image_categories_id" integer,
  	"web_pages_id" integer,
  	"web_partners_id" integer,
  	"web_socials_id" integer,
  	"web_books_id" integer,
  	"web_text_blocks_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "web_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"href" varchar,
  	"target" "link_target_enum" DEFAULT '_self'
  );
  
  CREATE TABLE "web_footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"text1" jsonb,
  	"text2" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "web_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"href" varchar,
  	"target" "link_target_enum" DEFAULT '_self'
  );
  
  CREATE TABLE "web_header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "web_sidebar_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"text" varchar,
  	"href" varchar,
  	"target" "link_target_enum" DEFAULT '_self'
  );
  
  CREATE TABLE "web_sidebar" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_link_text" varchar,
  	"logo_link_href" varchar,
  	"logo_link_target" "link_target_enum" DEFAULT '_self',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"phone_text" varchar,
  	"phone_href" varchar,
  	"mail_text" varchar,
  	"mail_href" varchar,
  	"address_place" varchar,
  	"address_street" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_roles_fk" FOREIGN KEY ("roles_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_course_shared_documents_fk" FOREIGN KEY ("course_shared_documents_id") REFERENCES "public"."course_shared_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_course_video_lessons_fk" FOREIGN KEY ("course_video_lessons_id") REFERENCES "public"."course_video_lessons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_modules" ADD CONSTRAINT "course_modules_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_modules_rels" ADD CONSTRAINT "course_modules_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."course_modules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_modules_rels" ADD CONSTRAINT "course_modules_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_modules_rels" ADD CONSTRAINT "course_modules_rels_plants_fk" FOREIGN KEY ("plants_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_modules_rels" ADD CONSTRAINT "course_modules_rels_course_excursions_fk" FOREIGN KEY ("course_excursions_id") REFERENCES "public"."course_excursions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_modules_rels" ADD CONSTRAINT "course_modules_rels_course_practice_units_fk" FOREIGN KEY ("course_practice_units_id") REFERENCES "public"."course_practice_units"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_modules_rels" ADD CONSTRAINT "course_modules_rels_course_speakers_fk" FOREIGN KEY ("course_speakers_id") REFERENCES "public"."course_speakers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_modules_rels" ADD CONSTRAINT "course_modules_rels_course_gardens_fk" FOREIGN KEY ("course_gardens_id") REFERENCES "public"."course_gardens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_modules_rels" ADD CONSTRAINT "course_modules_rels_course_shared_documents_fk" FOREIGN KEY ("course_shared_documents_id") REFERENCES "public"."course_shared_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_german_name_variations" ADD CONSTRAINT "plants_german_name_variations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_scientific_name_variations" ADD CONSTRAINT "plants_scientific_name_variations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_plant_part_substances" ADD CONSTRAINT "plants_plant_part_substances_plant_part_id_plant_parts_id_fk" FOREIGN KEY ("plant_part_id") REFERENCES "public"."plant_parts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants_plant_part_substances" ADD CONSTRAINT "plants_plant_part_substances_plant_substance_id_plant_substances_id_fk" FOREIGN KEY ("plant_substance_id") REFERENCES "public"."plant_substances"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants_plant_part_substances" ADD CONSTRAINT "plants_plant_part_substances_plant_effect_id_plant_effects_id_fk" FOREIGN KEY ("plant_effect_id") REFERENCES "public"."plant_effects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants_plant_part_substances" ADD CONSTRAINT "plants_plant_part_substances_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants" ADD CONSTRAINT "plants_family_id_plant_families_id_fk" FOREIGN KEY ("family_id") REFERENCES "public"."plant_families"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants" ADD CONSTRAINT "plants_toxicity_level_id_plant_toxicity_levels_id_fk" FOREIGN KEY ("toxicity_level_id") REFERENCES "public"."plant_toxicity_levels"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants_rels" ADD CONSTRAINT "plants_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_rels" ADD CONSTRAINT "plants_rels_plant_groups_fk" FOREIGN KEY ("plant_groups_id") REFERENCES "public"."plant_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_rels" ADD CONSTRAINT "plants_rels_plant_recognition_features_fk" FOREIGN KEY ("plant_recognition_features_id") REFERENCES "public"."plant_recognition_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plant_families_german_name_variations" ADD CONSTRAINT "plant_families_german_name_variations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plant_families"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plant_families_scientific_name_variations" ADD CONSTRAINT "plant_families_scientific_name_variations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plant_families"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plant_images" ADD CONSTRAINT "plant_images_plant_id_plants_id_fk" FOREIGN KEY ("plant_id") REFERENCES "public"."plants"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plant_images_rels" ADD CONSTRAINT "plant_images_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."plant_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plant_images_rels" ADD CONSTRAINT "plant_images_rels_plant_recognition_features_fk" FOREIGN KEY ("plant_recognition_features_id") REFERENCES "public"."plant_recognition_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_images_rels" ADD CONSTRAINT "web_images_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."web_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_images_rels" ADD CONSTRAINT "web_images_rels_web_image_categories_fk" FOREIGN KEY ("web_image_categories_id") REFERENCES "public"."web_image_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_accordions_content_items" ADD CONSTRAINT "web_pages_blocks_web_accordions_content_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages_blocks_web_accordions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_accordions" ADD CONSTRAINT "web_pages_blocks_web_accordions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_animatedtext" ADD CONSTRAINT "web_pages_blocks_web_animatedtext_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_book_list" ADD CONSTRAINT "web_pages_blocks_web_book_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_course_list" ADD CONSTRAINT "web_pages_blocks_web_course_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_hero_large" ADD CONSTRAINT "web_pages_blocks_web_hero_large_content_image_id_web_images_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_hero_large" ADD CONSTRAINT "web_pages_blocks_web_hero_large_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_hero_small" ADD CONSTRAINT "web_pages_blocks_web_hero_small_content_image_id_web_images_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_hero_small" ADD CONSTRAINT "web_pages_blocks_web_hero_small_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_highlighted_links_content_links" ADD CONSTRAINT "web_pages_blocks_web_highlighted_links_content_links_image_id_web_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_highlighted_links_content_links" ADD CONSTRAINT "web_pages_blocks_web_highlighted_links_content_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages_blocks_web_highlighted_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_highlighted_links" ADD CONSTRAINT "web_pages_blocks_web_highlighted_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_image_text" ADD CONSTRAINT "web_pages_blocks_web_image_text_content_image_id_web_images_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_image_text" ADD CONSTRAINT "web_pages_blocks_web_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_infos_content_infos" ADD CONSTRAINT "web_pages_blocks_web_infos_content_infos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages_blocks_web_infos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_infos" ADD CONSTRAINT "web_pages_blocks_web_infos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_mood_picture" ADD CONSTRAINT "web_pages_blocks_web_mood_picture_content_image_id_web_images_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_mood_picture" ADD CONSTRAINT "web_pages_blocks_web_mood_picture_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_card_content_cards" ADD CONSTRAINT "web_pages_blocks_web_swiper_card_content_cards_image_id_web_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_card_content_cards" ADD CONSTRAINT "web_pages_blocks_web_swiper_card_content_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages_blocks_web_swiper_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_card" ADD CONSTRAINT "web_pages_blocks_web_swiper_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_large_content_items" ADD CONSTRAINT "web_pages_blocks_web_swiper_large_content_items_image_id_web_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_large_content_items" ADD CONSTRAINT "web_pages_blocks_web_swiper_large_content_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages_blocks_web_swiper_large"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_large" ADD CONSTRAINT "web_pages_blocks_web_swiper_large_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_simple_content_slides_images" ADD CONSTRAINT "web_pages_blocks_web_swiper_simple_content_slides_images_image_id_web_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_simple_content_slides_images" ADD CONSTRAINT "web_pages_blocks_web_swiper_simple_content_slides_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages_blocks_web_swiper_simple_content_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_simple_content_slides" ADD CONSTRAINT "web_pages_blocks_web_swiper_simple_content_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages_blocks_web_swiper_simple"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_swiper_simple" ADD CONSTRAINT "web_pages_blocks_web_swiper_simple_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_text_element" ADD CONSTRAINT "web_pages_blocks_web_text_element_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_blocks_web_title_element" ADD CONSTRAINT "web_pages_blocks_web_title_element_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages" ADD CONSTRAINT "web_pages_image_id_web_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_pages_texts" ADD CONSTRAINT "web_pages_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_rels" ADD CONSTRAINT "web_pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_rels" ADD CONSTRAINT "web_pages_rels_web_books_fk" FOREIGN KEY ("web_books_id") REFERENCES "public"."web_books"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_pages_rels" ADD CONSTRAINT "web_pages_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_partners" ADD CONSTRAINT "web_partners_image_id_web_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_socials" ADD CONSTRAINT "web_socials_background_image_id_web_images_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "web_books" ADD CONSTRAINT "web_books_cover_id_web_images_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."web_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_roles_fk" FOREIGN KEY ("roles_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_course_modules_fk" FOREIGN KEY ("course_modules_id") REFERENCES "public"."course_modules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_course_excursions_fk" FOREIGN KEY ("course_excursions_id") REFERENCES "public"."course_excursions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_course_practice_units_fk" FOREIGN KEY ("course_practice_units_id") REFERENCES "public"."course_practice_units"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_course_speakers_fk" FOREIGN KEY ("course_speakers_id") REFERENCES "public"."course_speakers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_course_gardens_fk" FOREIGN KEY ("course_gardens_id") REFERENCES "public"."course_gardens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_course_shared_documents_fk" FOREIGN KEY ("course_shared_documents_id") REFERENCES "public"."course_shared_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_course_video_lessons_fk" FOREIGN KEY ("course_video_lessons_id") REFERENCES "public"."course_video_lessons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plants_fk" FOREIGN KEY ("plants_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plant_families_fk" FOREIGN KEY ("plant_families_id") REFERENCES "public"."plant_families"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plant_groups_fk" FOREIGN KEY ("plant_groups_id") REFERENCES "public"."plant_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plant_toxicity_levels_fk" FOREIGN KEY ("plant_toxicity_levels_id") REFERENCES "public"."plant_toxicity_levels"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plant_recognition_features_fk" FOREIGN KEY ("plant_recognition_features_id") REFERENCES "public"."plant_recognition_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plant_images_fk" FOREIGN KEY ("plant_images_id") REFERENCES "public"."plant_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plant_parts_fk" FOREIGN KEY ("plant_parts_id") REFERENCES "public"."plant_parts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plant_substances_fk" FOREIGN KEY ("plant_substances_id") REFERENCES "public"."plant_substances"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plant_effects_fk" FOREIGN KEY ("plant_effects_id") REFERENCES "public"."plant_effects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_images_fk" FOREIGN KEY ("web_images_id") REFERENCES "public"."web_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_image_categories_fk" FOREIGN KEY ("web_image_categories_id") REFERENCES "public"."web_image_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_pages_fk" FOREIGN KEY ("web_pages_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_partners_fk" FOREIGN KEY ("web_partners_id") REFERENCES "public"."web_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_socials_fk" FOREIGN KEY ("web_socials_id") REFERENCES "public"."web_socials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_books_fk" FOREIGN KEY ("web_books_id") REFERENCES "public"."web_books"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_text_blocks_fk" FOREIGN KEY ("web_text_blocks_id") REFERENCES "public"."web_text_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_footer_links" ADD CONSTRAINT "web_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_header_links" ADD CONSTRAINT "web_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_sidebar_links" ADD CONSTRAINT "web_sidebar_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_sidebar"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "users_rels_order_idx" ON "users_rels" USING btree ("order");
  CREATE INDEX "users_rels_parent_idx" ON "users_rels" USING btree ("parent_id");
  CREATE INDEX "users_rels_path_idx" ON "users_rels" USING btree ("path");
  CREATE INDEX "users_rels_roles_id_idx" ON "users_rels" USING btree ("roles_id");
  CREATE UNIQUE INDEX "roles_slug_idx" ON "roles" USING btree ("slug");
  CREATE INDEX "roles_updated_at_idx" ON "roles" USING btree ("updated_at");
  CREATE INDEX "roles_created_at_idx" ON "roles" USING btree ("created_at");
  CREATE UNIQUE INDEX "courses_name_idx" ON "courses" USING btree ("name");
  CREATE INDEX "courses_updated_at_idx" ON "courses" USING btree ("updated_at");
  CREATE INDEX "courses_created_at_idx" ON "courses" USING btree ("created_at");
  CREATE INDEX "courses_rels_order_idx" ON "courses_rels" USING btree ("order");
  CREATE INDEX "courses_rels_parent_idx" ON "courses_rels" USING btree ("parent_id");
  CREATE INDEX "courses_rels_path_idx" ON "courses_rels" USING btree ("path");
  CREATE INDEX "courses_rels_users_id_idx" ON "courses_rels" USING btree ("users_id");
  CREATE INDEX "courses_rels_course_shared_documents_id_idx" ON "courses_rels" USING btree ("course_shared_documents_id");
  CREATE INDEX "courses_rels_course_video_lessons_id_idx" ON "courses_rels" USING btree ("course_video_lessons_id");
  CREATE INDEX "course_modules_course_idx" ON "course_modules" USING btree ("course_id");
  CREATE INDEX "course_modules_updated_at_idx" ON "course_modules" USING btree ("updated_at");
  CREATE INDEX "course_modules_created_at_idx" ON "course_modules" USING btree ("created_at");
  CREATE INDEX "course_modules_rels_order_idx" ON "course_modules_rels" USING btree ("order");
  CREATE INDEX "course_modules_rels_parent_idx" ON "course_modules_rels" USING btree ("parent_id");
  CREATE INDEX "course_modules_rels_path_idx" ON "course_modules_rels" USING btree ("path");
  CREATE INDEX "course_modules_rels_users_id_idx" ON "course_modules_rels" USING btree ("users_id");
  CREATE INDEX "course_modules_rels_plants_id_idx" ON "course_modules_rels" USING btree ("plants_id");
  CREATE INDEX "course_modules_rels_course_excursions_id_idx" ON "course_modules_rels" USING btree ("course_excursions_id");
  CREATE INDEX "course_modules_rels_course_practice_units_id_idx" ON "course_modules_rels" USING btree ("course_practice_units_id");
  CREATE INDEX "course_modules_rels_course_speakers_id_idx" ON "course_modules_rels" USING btree ("course_speakers_id");
  CREATE INDEX "course_modules_rels_course_gardens_id_idx" ON "course_modules_rels" USING btree ("course_gardens_id");
  CREATE INDEX "course_modules_rels_course_shared_documents_id_idx" ON "course_modules_rels" USING btree ("course_shared_documents_id");
  CREATE INDEX "course_excursions_updated_at_idx" ON "course_excursions" USING btree ("updated_at");
  CREATE INDEX "course_excursions_created_at_idx" ON "course_excursions" USING btree ("created_at");
  CREATE INDEX "course_practice_units_updated_at_idx" ON "course_practice_units" USING btree ("updated_at");
  CREATE INDEX "course_practice_units_created_at_idx" ON "course_practice_units" USING btree ("created_at");
  CREATE INDEX "course_speakers_updated_at_idx" ON "course_speakers" USING btree ("updated_at");
  CREATE INDEX "course_speakers_created_at_idx" ON "course_speakers" USING btree ("created_at");
  CREATE INDEX "course_gardens_updated_at_idx" ON "course_gardens" USING btree ("updated_at");
  CREATE INDEX "course_gardens_created_at_idx" ON "course_gardens" USING btree ("created_at");
  CREATE INDEX "course_shared_documents_updated_at_idx" ON "course_shared_documents" USING btree ("updated_at");
  CREATE INDEX "course_shared_documents_created_at_idx" ON "course_shared_documents" USING btree ("created_at");
  CREATE INDEX "course_video_lessons_updated_at_idx" ON "course_video_lessons" USING btree ("updated_at");
  CREATE INDEX "course_video_lessons_created_at_idx" ON "course_video_lessons" USING btree ("created_at");
  CREATE INDEX "plants_german_name_variations_order_idx" ON "plants_german_name_variations" USING btree ("_order");
  CREATE INDEX "plants_german_name_variations_parent_id_idx" ON "plants_german_name_variations" USING btree ("_parent_id");
  CREATE INDEX "plants_scientific_name_variations_order_idx" ON "plants_scientific_name_variations" USING btree ("_order");
  CREATE INDEX "plants_scientific_name_variations_parent_id_idx" ON "plants_scientific_name_variations" USING btree ("_parent_id");
  CREATE INDEX "plants_plant_part_substances_order_idx" ON "plants_plant_part_substances" USING btree ("_order");
  CREATE INDEX "plants_plant_part_substances_parent_id_idx" ON "plants_plant_part_substances" USING btree ("_parent_id");
  CREATE INDEX "plants_plant_part_substances_plant_part_idx" ON "plants_plant_part_substances" USING btree ("plant_part_id");
  CREATE INDEX "plants_plant_part_substances_plant_substance_idx" ON "plants_plant_part_substances" USING btree ("plant_substance_id");
  CREATE INDEX "plants_plant_part_substances_plant_effect_idx" ON "plants_plant_part_substances" USING btree ("plant_effect_id");
  CREATE INDEX "plants_family_idx" ON "plants" USING btree ("family_id");
  CREATE INDEX "plants_toxicity_level_idx" ON "plants" USING btree ("toxicity_level_id");
  CREATE INDEX "plants_updated_at_idx" ON "plants" USING btree ("updated_at");
  CREATE INDEX "plants_created_at_idx" ON "plants" USING btree ("created_at");
  CREATE INDEX "plants_rels_order_idx" ON "plants_rels" USING btree ("order");
  CREATE INDEX "plants_rels_parent_idx" ON "plants_rels" USING btree ("parent_id");
  CREATE INDEX "plants_rels_path_idx" ON "plants_rels" USING btree ("path");
  CREATE INDEX "plants_rels_plant_groups_id_idx" ON "plants_rels" USING btree ("plant_groups_id");
  CREATE INDEX "plants_rels_plant_recognition_features_id_idx" ON "plants_rels" USING btree ("plant_recognition_features_id");
  CREATE INDEX "plant_families_german_name_variations_order_idx" ON "plant_families_german_name_variations" USING btree ("_order");
  CREATE INDEX "plant_families_german_name_variations_parent_id_idx" ON "plant_families_german_name_variations" USING btree ("_parent_id");
  CREATE INDEX "plant_families_scientific_name_variations_order_idx" ON "plant_families_scientific_name_variations" USING btree ("_order");
  CREATE INDEX "plant_families_scientific_name_variations_parent_id_idx" ON "plant_families_scientific_name_variations" USING btree ("_parent_id");
  CREATE INDEX "plant_families_updated_at_idx" ON "plant_families" USING btree ("updated_at");
  CREATE INDEX "plant_families_created_at_idx" ON "plant_families" USING btree ("created_at");
  CREATE INDEX "plant_groups_updated_at_idx" ON "plant_groups" USING btree ("updated_at");
  CREATE INDEX "plant_groups_created_at_idx" ON "plant_groups" USING btree ("created_at");
  CREATE INDEX "plant_toxicity_levels_updated_at_idx" ON "plant_toxicity_levels" USING btree ("updated_at");
  CREATE INDEX "plant_toxicity_levels_created_at_idx" ON "plant_toxicity_levels" USING btree ("created_at");
  CREATE INDEX "plant_recognition_features_updated_at_idx" ON "plant_recognition_features" USING btree ("updated_at");
  CREATE INDEX "plant_recognition_features_created_at_idx" ON "plant_recognition_features" USING btree ("created_at");
  CREATE INDEX "plant_images_plant_idx" ON "plant_images" USING btree ("plant_id");
  CREATE INDEX "plant_images_updated_at_idx" ON "plant_images" USING btree ("updated_at");
  CREATE INDEX "plant_images_created_at_idx" ON "plant_images" USING btree ("created_at");
  CREATE UNIQUE INDEX "plant_images_filename_idx" ON "plant_images" USING btree ("filename");
  CREATE INDEX "plant_images_sizes_thumbnail_jpeg_sizes_thumbnail_jpeg_f_idx" ON "plant_images" USING btree ("sizes_thumbnail_jpeg_filename");
  CREATE INDEX "plant_images_sizes_thumbnail_webp_sizes_thumbnail_webp_f_idx" ON "plant_images" USING btree ("sizes_thumbnail_webp_filename");
  CREATE INDEX "plant_images_sizes_thumbnail_avif_sizes_thumbnail_avif_f_idx" ON "plant_images" USING btree ("sizes_thumbnail_avif_filename");
  CREATE INDEX "plant_images_sizes_mobile_jpeg_sizes_mobile_jpeg_filenam_idx" ON "plant_images" USING btree ("sizes_mobile_jpeg_filename");
  CREATE INDEX "plant_images_sizes_mobile_webp_sizes_mobile_webp_filenam_idx" ON "plant_images" USING btree ("sizes_mobile_webp_filename");
  CREATE INDEX "plant_images_sizes_mobile_avif_sizes_mobile_avif_filenam_idx" ON "plant_images" USING btree ("sizes_mobile_avif_filename");
  CREATE INDEX "plant_images_sizes_tablet_jpeg_sizes_tablet_jpeg_filenam_idx" ON "plant_images" USING btree ("sizes_tablet_jpeg_filename");
  CREATE INDEX "plant_images_sizes_tablet_webp_sizes_tablet_webp_filenam_idx" ON "plant_images" USING btree ("sizes_tablet_webp_filename");
  CREATE INDEX "plant_images_sizes_tablet_avif_sizes_tablet_avif_filenam_idx" ON "plant_images" USING btree ("sizes_tablet_avif_filename");
  CREATE INDEX "plant_images_sizes_desktop_jpeg_sizes_desktop_jpeg_filen_idx" ON "plant_images" USING btree ("sizes_desktop_jpeg_filename");
  CREATE INDEX "plant_images_sizes_desktop_webp_sizes_desktop_webp_filen_idx" ON "plant_images" USING btree ("sizes_desktop_webp_filename");
  CREATE INDEX "plant_images_sizes_desktop_avif_sizes_desktop_avif_filen_idx" ON "plant_images" USING btree ("sizes_desktop_avif_filename");
  CREATE INDEX "plant_images_rels_order_idx" ON "plant_images_rels" USING btree ("order");
  CREATE INDEX "plant_images_rels_parent_idx" ON "plant_images_rels" USING btree ("parent_id");
  CREATE INDEX "plant_images_rels_path_idx" ON "plant_images_rels" USING btree ("path");
  CREATE INDEX "plant_images_rels_plant_recognition_features_id_idx" ON "plant_images_rels" USING btree ("plant_recognition_features_id");
  CREATE INDEX "plant_parts_updated_at_idx" ON "plant_parts" USING btree ("updated_at");
  CREATE INDEX "plant_parts_created_at_idx" ON "plant_parts" USING btree ("created_at");
  CREATE INDEX "plant_substances_updated_at_idx" ON "plant_substances" USING btree ("updated_at");
  CREATE INDEX "plant_substances_created_at_idx" ON "plant_substances" USING btree ("created_at");
  CREATE INDEX "plant_effects_updated_at_idx" ON "plant_effects" USING btree ("updated_at");
  CREATE INDEX "plant_effects_created_at_idx" ON "plant_effects" USING btree ("created_at");
  CREATE INDEX "web_images_updated_at_idx" ON "web_images" USING btree ("updated_at");
  CREATE INDEX "web_images_created_at_idx" ON "web_images" USING btree ("created_at");
  CREATE UNIQUE INDEX "web_images_filename_idx" ON "web_images" USING btree ("filename");
  CREATE INDEX "web_images_sizes_thumbnail_jpeg_sizes_thumbnail_jpeg_fil_idx" ON "web_images" USING btree ("sizes_thumbnail_jpeg_filename");
  CREATE INDEX "web_images_sizes_thumbnail_webp_sizes_thumbnail_webp_fil_idx" ON "web_images" USING btree ("sizes_thumbnail_webp_filename");
  CREATE INDEX "web_images_sizes_thumbnail_avif_sizes_thumbnail_avif_fil_idx" ON "web_images" USING btree ("sizes_thumbnail_avif_filename");
  CREATE INDEX "web_images_sizes_mobile_jpeg_sizes_mobile_jpeg_filename_idx" ON "web_images" USING btree ("sizes_mobile_jpeg_filename");
  CREATE INDEX "web_images_sizes_mobile_webp_sizes_mobile_webp_filename_idx" ON "web_images" USING btree ("sizes_mobile_webp_filename");
  CREATE INDEX "web_images_sizes_mobile_avif_sizes_mobile_avif_filename_idx" ON "web_images" USING btree ("sizes_mobile_avif_filename");
  CREATE INDEX "web_images_sizes_tablet_jpeg_sizes_tablet_jpeg_filename_idx" ON "web_images" USING btree ("sizes_tablet_jpeg_filename");
  CREATE INDEX "web_images_sizes_tablet_webp_sizes_tablet_webp_filename_idx" ON "web_images" USING btree ("sizes_tablet_webp_filename");
  CREATE INDEX "web_images_sizes_tablet_avif_sizes_tablet_avif_filename_idx" ON "web_images" USING btree ("sizes_tablet_avif_filename");
  CREATE INDEX "web_images_sizes_desktop_jpeg_sizes_desktop_jpeg_filenam_idx" ON "web_images" USING btree ("sizes_desktop_jpeg_filename");
  CREATE INDEX "web_images_sizes_desktop_webp_sizes_desktop_webp_filenam_idx" ON "web_images" USING btree ("sizes_desktop_webp_filename");
  CREATE INDEX "web_images_sizes_desktop_avif_sizes_desktop_avif_filenam_idx" ON "web_images" USING btree ("sizes_desktop_avif_filename");
  CREATE INDEX "web_images_rels_order_idx" ON "web_images_rels" USING btree ("order");
  CREATE INDEX "web_images_rels_parent_idx" ON "web_images_rels" USING btree ("parent_id");
  CREATE INDEX "web_images_rels_path_idx" ON "web_images_rels" USING btree ("path");
  CREATE INDEX "web_images_rels_web_image_categories_id_idx" ON "web_images_rels" USING btree ("web_image_categories_id");
  CREATE INDEX "web_image_categories_updated_at_idx" ON "web_image_categories" USING btree ("updated_at");
  CREATE INDEX "web_image_categories_created_at_idx" ON "web_image_categories" USING btree ("created_at");
  CREATE INDEX "web_pages_blocks_web_accordions_content_items_order_idx" ON "web_pages_blocks_web_accordions_content_items" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_accordions_content_items_parent_id_idx" ON "web_pages_blocks_web_accordions_content_items" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_accordions_order_idx" ON "web_pages_blocks_web_accordions" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_accordions_parent_id_idx" ON "web_pages_blocks_web_accordions" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_accordions_path_idx" ON "web_pages_blocks_web_accordions" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_animatedtext_order_idx" ON "web_pages_blocks_web_animatedtext" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_animatedtext_parent_id_idx" ON "web_pages_blocks_web_animatedtext" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_animatedtext_path_idx" ON "web_pages_blocks_web_animatedtext" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_book_list_order_idx" ON "web_pages_blocks_web_book_list" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_book_list_parent_id_idx" ON "web_pages_blocks_web_book_list" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_book_list_path_idx" ON "web_pages_blocks_web_book_list" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_course_list_order_idx" ON "web_pages_blocks_web_course_list" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_course_list_parent_id_idx" ON "web_pages_blocks_web_course_list" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_course_list_path_idx" ON "web_pages_blocks_web_course_list" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_hero_large_order_idx" ON "web_pages_blocks_web_hero_large" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_hero_large_parent_id_idx" ON "web_pages_blocks_web_hero_large" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_hero_large_path_idx" ON "web_pages_blocks_web_hero_large" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_hero_large_content_content_image_idx" ON "web_pages_blocks_web_hero_large" USING btree ("content_image_id");
  CREATE INDEX "web_pages_blocks_web_hero_small_order_idx" ON "web_pages_blocks_web_hero_small" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_hero_small_parent_id_idx" ON "web_pages_blocks_web_hero_small" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_hero_small_path_idx" ON "web_pages_blocks_web_hero_small" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_hero_small_content_content_image_idx" ON "web_pages_blocks_web_hero_small" USING btree ("content_image_id");
  CREATE INDEX "web_pages_blocks_web_highlighted_links_content_links_order_idx" ON "web_pages_blocks_web_highlighted_links_content_links" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_highlighted_links_content_links_parent_id_idx" ON "web_pages_blocks_web_highlighted_links_content_links" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_highlighted_links_content_links_ima_idx" ON "web_pages_blocks_web_highlighted_links_content_links" USING btree ("image_id");
  CREATE INDEX "web_pages_blocks_web_highlighted_links_order_idx" ON "web_pages_blocks_web_highlighted_links" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_highlighted_links_parent_id_idx" ON "web_pages_blocks_web_highlighted_links" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_highlighted_links_path_idx" ON "web_pages_blocks_web_highlighted_links" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_image_text_order_idx" ON "web_pages_blocks_web_image_text" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_image_text_parent_id_idx" ON "web_pages_blocks_web_image_text" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_image_text_path_idx" ON "web_pages_blocks_web_image_text" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_image_text_content_content_image_idx" ON "web_pages_blocks_web_image_text" USING btree ("content_image_id");
  CREATE INDEX "web_pages_blocks_web_infos_content_infos_order_idx" ON "web_pages_blocks_web_infos_content_infos" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_infos_content_infos_parent_id_idx" ON "web_pages_blocks_web_infos_content_infos" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_infos_order_idx" ON "web_pages_blocks_web_infos" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_infos_parent_id_idx" ON "web_pages_blocks_web_infos" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_infos_path_idx" ON "web_pages_blocks_web_infos" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_mood_picture_order_idx" ON "web_pages_blocks_web_mood_picture" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_mood_picture_parent_id_idx" ON "web_pages_blocks_web_mood_picture" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_mood_picture_path_idx" ON "web_pages_blocks_web_mood_picture" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_mood_picture_content_content_image_idx" ON "web_pages_blocks_web_mood_picture" USING btree ("content_image_id");
  CREATE INDEX "web_pages_blocks_web_swiper_card_content_cards_order_idx" ON "web_pages_blocks_web_swiper_card_content_cards" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_swiper_card_content_cards_parent_id_idx" ON "web_pages_blocks_web_swiper_card_content_cards" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_swiper_card_content_cards_image_idx" ON "web_pages_blocks_web_swiper_card_content_cards" USING btree ("image_id");
  CREATE INDEX "web_pages_blocks_web_swiper_card_order_idx" ON "web_pages_blocks_web_swiper_card" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_swiper_card_parent_id_idx" ON "web_pages_blocks_web_swiper_card" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_swiper_card_path_idx" ON "web_pages_blocks_web_swiper_card" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_swiper_large_content_items_order_idx" ON "web_pages_blocks_web_swiper_large_content_items" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_swiper_large_content_items_parent_id_idx" ON "web_pages_blocks_web_swiper_large_content_items" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_swiper_large_content_items_image_idx" ON "web_pages_blocks_web_swiper_large_content_items" USING btree ("image_id");
  CREATE INDEX "web_pages_blocks_web_swiper_large_order_idx" ON "web_pages_blocks_web_swiper_large" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_swiper_large_parent_id_idx" ON "web_pages_blocks_web_swiper_large" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_swiper_large_path_idx" ON "web_pages_blocks_web_swiper_large" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_swiper_simple_content_slides_images_order_idx" ON "web_pages_blocks_web_swiper_simple_content_slides_images" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_swiper_simple_content_slides_images_parent_id_idx" ON "web_pages_blocks_web_swiper_simple_content_slides_images" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_swiper_simple_content_slides_images_idx" ON "web_pages_blocks_web_swiper_simple_content_slides_images" USING btree ("image_id");
  CREATE INDEX "web_pages_blocks_web_swiper_simple_content_slides_order_idx" ON "web_pages_blocks_web_swiper_simple_content_slides" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_swiper_simple_content_slides_parent_id_idx" ON "web_pages_blocks_web_swiper_simple_content_slides" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_swiper_simple_order_idx" ON "web_pages_blocks_web_swiper_simple" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_swiper_simple_parent_id_idx" ON "web_pages_blocks_web_swiper_simple" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_swiper_simple_path_idx" ON "web_pages_blocks_web_swiper_simple" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_text_element_order_idx" ON "web_pages_blocks_web_text_element" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_text_element_parent_id_idx" ON "web_pages_blocks_web_text_element" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_text_element_path_idx" ON "web_pages_blocks_web_text_element" USING btree ("_path");
  CREATE INDEX "web_pages_blocks_web_title_element_order_idx" ON "web_pages_blocks_web_title_element" USING btree ("_order");
  CREATE INDEX "web_pages_blocks_web_title_element_parent_id_idx" ON "web_pages_blocks_web_title_element" USING btree ("_parent_id");
  CREATE INDEX "web_pages_blocks_web_title_element_path_idx" ON "web_pages_blocks_web_title_element" USING btree ("_path");
  CREATE UNIQUE INDEX "web_pages_slug_idx" ON "web_pages" USING btree ("slug");
  CREATE INDEX "web_pages_image_idx" ON "web_pages" USING btree ("image_id");
  CREATE INDEX "web_pages_updated_at_idx" ON "web_pages" USING btree ("updated_at");
  CREATE INDEX "web_pages_created_at_idx" ON "web_pages" USING btree ("created_at");
  CREATE INDEX "web_pages_texts_order_parent" ON "web_pages_texts" USING btree ("order","parent_id");
  CREATE INDEX "web_pages_rels_order_idx" ON "web_pages_rels" USING btree ("order");
  CREATE INDEX "web_pages_rels_parent_idx" ON "web_pages_rels" USING btree ("parent_id");
  CREATE INDEX "web_pages_rels_path_idx" ON "web_pages_rels" USING btree ("path");
  CREATE INDEX "web_pages_rels_web_books_id_idx" ON "web_pages_rels" USING btree ("web_books_id");
  CREATE INDEX "web_pages_rels_courses_id_idx" ON "web_pages_rels" USING btree ("courses_id");
  CREATE INDEX "web_partners_image_idx" ON "web_partners" USING btree ("image_id");
  CREATE INDEX "web_partners_updated_at_idx" ON "web_partners" USING btree ("updated_at");
  CREATE INDEX "web_partners_created_at_idx" ON "web_partners" USING btree ("created_at");
  CREATE INDEX "web_socials_background_image_idx" ON "web_socials" USING btree ("background_image_id");
  CREATE INDEX "web_socials_updated_at_idx" ON "web_socials" USING btree ("updated_at");
  CREATE INDEX "web_socials_created_at_idx" ON "web_socials" USING btree ("created_at");
  CREATE INDEX "web_books_cover_idx" ON "web_books" USING btree ("cover_id");
  CREATE INDEX "web_books_updated_at_idx" ON "web_books" USING btree ("updated_at");
  CREATE INDEX "web_books_created_at_idx" ON "web_books" USING btree ("created_at");
  CREATE UNIQUE INDEX "web_books_filename_idx" ON "web_books" USING btree ("filename");
  CREATE INDEX "web_text_blocks_updated_at_idx" ON "web_text_blocks" USING btree ("updated_at");
  CREATE INDEX "web_text_blocks_created_at_idx" ON "web_text_blocks" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_roles_id_idx" ON "payload_locked_documents_rels" USING btree ("roles_id");
  CREATE INDEX "payload_locked_documents_rels_courses_id_idx" ON "payload_locked_documents_rels" USING btree ("courses_id");
  CREATE INDEX "payload_locked_documents_rels_course_modules_id_idx" ON "payload_locked_documents_rels" USING btree ("course_modules_id");
  CREATE INDEX "payload_locked_documents_rels_course_excursions_id_idx" ON "payload_locked_documents_rels" USING btree ("course_excursions_id");
  CREATE INDEX "payload_locked_documents_rels_course_practice_units_id_idx" ON "payload_locked_documents_rels" USING btree ("course_practice_units_id");
  CREATE INDEX "payload_locked_documents_rels_course_speakers_id_idx" ON "payload_locked_documents_rels" USING btree ("course_speakers_id");
  CREATE INDEX "payload_locked_documents_rels_course_gardens_id_idx" ON "payload_locked_documents_rels" USING btree ("course_gardens_id");
  CREATE INDEX "payload_locked_documents_rels_course_shared_documents_id_idx" ON "payload_locked_documents_rels" USING btree ("course_shared_documents_id");
  CREATE INDEX "payload_locked_documents_rels_course_video_lessons_id_idx" ON "payload_locked_documents_rels" USING btree ("course_video_lessons_id");
  CREATE INDEX "payload_locked_documents_rels_plants_id_idx" ON "payload_locked_documents_rels" USING btree ("plants_id");
  CREATE INDEX "payload_locked_documents_rels_plant_families_id_idx" ON "payload_locked_documents_rels" USING btree ("plant_families_id");
  CREATE INDEX "payload_locked_documents_rels_plant_groups_id_idx" ON "payload_locked_documents_rels" USING btree ("plant_groups_id");
  CREATE INDEX "payload_locked_documents_rels_plant_toxicity_levels_id_idx" ON "payload_locked_documents_rels" USING btree ("plant_toxicity_levels_id");
  CREATE INDEX "payload_locked_documents_rels_plant_recognition_features_idx" ON "payload_locked_documents_rels" USING btree ("plant_recognition_features_id");
  CREATE INDEX "payload_locked_documents_rels_plant_images_id_idx" ON "payload_locked_documents_rels" USING btree ("plant_images_id");
  CREATE INDEX "payload_locked_documents_rels_plant_parts_id_idx" ON "payload_locked_documents_rels" USING btree ("plant_parts_id");
  CREATE INDEX "payload_locked_documents_rels_plant_substances_id_idx" ON "payload_locked_documents_rels" USING btree ("plant_substances_id");
  CREATE INDEX "payload_locked_documents_rels_plant_effects_id_idx" ON "payload_locked_documents_rels" USING btree ("plant_effects_id");
  CREATE INDEX "payload_locked_documents_rels_web_images_id_idx" ON "payload_locked_documents_rels" USING btree ("web_images_id");
  CREATE INDEX "payload_locked_documents_rels_web_image_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("web_image_categories_id");
  CREATE INDEX "payload_locked_documents_rels_web_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("web_pages_id");
  CREATE INDEX "payload_locked_documents_rels_web_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("web_partners_id");
  CREATE INDEX "payload_locked_documents_rels_web_socials_id_idx" ON "payload_locked_documents_rels" USING btree ("web_socials_id");
  CREATE INDEX "payload_locked_documents_rels_web_books_id_idx" ON "payload_locked_documents_rels" USING btree ("web_books_id");
  CREATE INDEX "payload_locked_documents_rels_web_text_blocks_id_idx" ON "payload_locked_documents_rels" USING btree ("web_text_blocks_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "web_footer_links_order_idx" ON "web_footer_links" USING btree ("_order");
  CREATE INDEX "web_footer_links_parent_id_idx" ON "web_footer_links" USING btree ("_parent_id");
  CREATE INDEX "web_header_links_order_idx" ON "web_header_links" USING btree ("_order");
  CREATE INDEX "web_header_links_parent_id_idx" ON "web_header_links" USING btree ("_parent_id");
  CREATE INDEX "web_sidebar_links_order_idx" ON "web_sidebar_links" USING btree ("_order");
  CREATE INDEX "web_sidebar_links_parent_id_idx" ON "web_sidebar_links" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "users_rels" CASCADE;
  DROP TABLE "roles" CASCADE;
  DROP TABLE "courses" CASCADE;
  DROP TABLE "courses_rels" CASCADE;
  DROP TABLE "course_modules" CASCADE;
  DROP TABLE "course_modules_rels" CASCADE;
  DROP TABLE "course_excursions" CASCADE;
  DROP TABLE "course_practice_units" CASCADE;
  DROP TABLE "course_speakers" CASCADE;
  DROP TABLE "course_gardens" CASCADE;
  DROP TABLE "course_shared_documents" CASCADE;
  DROP TABLE "course_video_lessons" CASCADE;
  DROP TABLE "plants_german_name_variations" CASCADE;
  DROP TABLE "plants_scientific_name_variations" CASCADE;
  DROP TABLE "plants_plant_part_substances" CASCADE;
  DROP TABLE "plants" CASCADE;
  DROP TABLE "plants_rels" CASCADE;
  DROP TABLE "plant_families_german_name_variations" CASCADE;
  DROP TABLE "plant_families_scientific_name_variations" CASCADE;
  DROP TABLE "plant_families" CASCADE;
  DROP TABLE "plant_groups" CASCADE;
  DROP TABLE "plant_toxicity_levels" CASCADE;
  DROP TABLE "plant_recognition_features" CASCADE;
  DROP TABLE "plant_images" CASCADE;
  DROP TABLE "plant_images_rels" CASCADE;
  DROP TABLE "plant_parts" CASCADE;
  DROP TABLE "plant_substances" CASCADE;
  DROP TABLE "plant_effects" CASCADE;
  DROP TABLE "web_images" CASCADE;
  DROP TABLE "web_images_rels" CASCADE;
  DROP TABLE "web_image_categories" CASCADE;
  DROP TABLE "web_pages_blocks_web_accordions_content_items" CASCADE;
  DROP TABLE "web_pages_blocks_web_accordions" CASCADE;
  DROP TABLE "web_pages_blocks_web_animatedtext" CASCADE;
  DROP TABLE "web_pages_blocks_web_book_list" CASCADE;
  DROP TABLE "web_pages_blocks_web_course_list" CASCADE;
  DROP TABLE "web_pages_blocks_web_hero_large" CASCADE;
  DROP TABLE "web_pages_blocks_web_hero_small" CASCADE;
  DROP TABLE "web_pages_blocks_web_highlighted_links_content_links" CASCADE;
  DROP TABLE "web_pages_blocks_web_highlighted_links" CASCADE;
  DROP TABLE "web_pages_blocks_web_image_text" CASCADE;
  DROP TABLE "web_pages_blocks_web_infos_content_infos" CASCADE;
  DROP TABLE "web_pages_blocks_web_infos" CASCADE;
  DROP TABLE "web_pages_blocks_web_mood_picture" CASCADE;
  DROP TABLE "web_pages_blocks_web_swiper_card_content_cards" CASCADE;
  DROP TABLE "web_pages_blocks_web_swiper_card" CASCADE;
  DROP TABLE "web_pages_blocks_web_swiper_large_content_items" CASCADE;
  DROP TABLE "web_pages_blocks_web_swiper_large" CASCADE;
  DROP TABLE "web_pages_blocks_web_swiper_simple_content_slides_images" CASCADE;
  DROP TABLE "web_pages_blocks_web_swiper_simple_content_slides" CASCADE;
  DROP TABLE "web_pages_blocks_web_swiper_simple" CASCADE;
  DROP TABLE "web_pages_blocks_web_text_element" CASCADE;
  DROP TABLE "web_pages_blocks_web_title_element" CASCADE;
  DROP TABLE "web_pages" CASCADE;
  DROP TABLE "web_pages_texts" CASCADE;
  DROP TABLE "web_pages_rels" CASCADE;
  DROP TABLE "web_partners" CASCADE;
  DROP TABLE "web_socials" CASCADE;
  DROP TABLE "web_books" CASCADE;
  DROP TABLE "web_text_blocks" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "web_footer_links" CASCADE;
  DROP TABLE "web_footer" CASCADE;
  DROP TABLE "web_header_links" CASCADE;
  DROP TABLE "web_header" CASCADE;
  DROP TABLE "web_sidebar_links" CASCADE;
  DROP TABLE "web_sidebar" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TYPE "public"."enum_roles_slug";
  DROP TYPE "public"."enum_courses_place";
  DROP TYPE "public"."enum_courses_status";
  DROP TYPE "public"."spacing_enum";
  DROP TYPE "public"."style_enum";
  DROP TYPE "public"."link_target_enum";
  DROP TYPE "public"."enum_web_pages_schema_type";
  DROP TYPE "public"."social_icon_enum";`)
}
