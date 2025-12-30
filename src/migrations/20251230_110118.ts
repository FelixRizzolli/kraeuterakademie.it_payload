import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_web_pages_schema_type" RENAME TO "enum_public_pages_schema_type";
  ALTER TABLE "web_images" RENAME TO "public_images";
  ALTER TABLE "web_images_rels" RENAME TO "public_images_rels";
  ALTER TABLE "web_image_categories" RENAME TO "public_image_categories";
  ALTER TABLE "web_pages_blocks_web_accordions_content_items" RENAME TO "public_pages_blocks_public_accordions_content_items";
  ALTER TABLE "web_pages_blocks_web_accordions" RENAME TO "public_pages_blocks_public_accordions";
  ALTER TABLE "web_pages_blocks_web_animatedtext" RENAME TO "public_pages_blocks_public_animated_text";
  ALTER TABLE "web_pages_blocks_web_book_list" RENAME TO "public_pages_blocks_public_book_list";
  ALTER TABLE "web_pages_blocks_web_course_list" RENAME TO "public_pages_blocks_public_course_list";
  ALTER TABLE "web_pages_blocks_web_hero_large" RENAME TO "public_pages_blocks_public_hero_large";
  ALTER TABLE "web_pages_blocks_web_hero_small" RENAME TO "public_pages_blocks_public_hero_small";
  ALTER TABLE "web_pages_blocks_web_highlighted_links_content_links" RENAME TO "public_pages_blocks_public_highlighted_links_content_links";
  ALTER TABLE "web_pages_blocks_web_highlighted_links" RENAME TO "public_pages_blocks_public_highlighted_links";
  ALTER TABLE "web_pages_blocks_web_image_text" RENAME TO "public_pages_blocks_public_image_text";
  ALTER TABLE "web_pages_blocks_web_infos_content_infos" RENAME TO "public_pages_blocks_public_infos_content_infos";
  ALTER TABLE "web_pages_blocks_web_infos" RENAME TO "public_pages_blocks_public_infos";
  ALTER TABLE "web_pages_blocks_web_mood_picture" RENAME TO "public_pages_blocks_public_mood_picture";
  ALTER TABLE "web_pages_blocks_web_swiper_card_content_cards" RENAME TO "public_pages_blocks_public_swiper_card_content_cards";
  ALTER TABLE "web_pages_blocks_web_swiper_card" RENAME TO "public_pages_blocks_public_swiper_card";
  ALTER TABLE "web_pages_blocks_web_swiper_large_content_items" RENAME TO "public_pages_blocks_public_swiper_large_content_items";
  ALTER TABLE "web_pages_blocks_web_swiper_large" RENAME TO "public_pages_blocks_public_swiper_large";
  ALTER TABLE "web_pages_blocks_web_swiper_simple_content_slides_images" RENAME TO "public_pages_blocks_public_swiper_simple_content_slides_images";
  ALTER TABLE "web_pages_blocks_web_swiper_simple_content_slides" RENAME TO "public_pages_blocks_public_swiper_simple_content_slides";
  ALTER TABLE "web_pages_blocks_web_swiper_simple" RENAME TO "public_pages_blocks_public_swiper_simple";
  ALTER TABLE "web_pages_blocks_web_text_element" RENAME TO "public_pages_blocks_public_text_element";
  ALTER TABLE "web_pages_blocks_web_title_element" RENAME TO "public_pages_blocks_public_title_element";
  ALTER TABLE "web_pages" RENAME TO "public_pages";
  ALTER TABLE "web_pages_texts" RENAME TO "public_pages_texts";
  ALTER TABLE "web_pages_rels" RENAME TO "public_pages_rels";
  ALTER TABLE "web_partners" RENAME TO "public_partners";
  ALTER TABLE "web_socials" RENAME TO "public_socials";
  ALTER TABLE "web_books" RENAME TO "public_books";
  ALTER TABLE "web_text_blocks" RENAME TO "public_text_blocks";
  ALTER TABLE "web_footer_links" RENAME TO "public_footer_links";
  ALTER TABLE "web_footer" RENAME TO "public_footer";
  ALTER TABLE "web_header_links" RENAME TO "public_header_links";
  ALTER TABLE "web_header" RENAME TO "public_header";
  ALTER TABLE "web_sidebar_links" RENAME TO "public_sidebar_links";
  ALTER TABLE "web_sidebar" RENAME TO "public_sidebar";
  ALTER TABLE "public_images_rels" RENAME COLUMN "web_image_categories_id" TO "public_image_categories_id";
  ALTER TABLE "public_pages_rels" RENAME COLUMN "web_books_id" TO "public_books_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "web_images_id" TO "public_images_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "web_image_categories_id" TO "public_image_categories_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "web_pages_id" TO "public_pages_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "web_partners_id" TO "public_partners_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "web_socials_id" TO "public_socials_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "web_books_id" TO "public_books_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "web_text_blocks_id" TO "public_text_blocks_id";
  ALTER TABLE "public_images_rels" DROP CONSTRAINT "web_images_rels_parent_fk";
  
  ALTER TABLE "public_images_rels" DROP CONSTRAINT "web_images_rels_web_image_categories_fk";
  
  ALTER TABLE "public_pages_blocks_public_accordions_content_items" DROP CONSTRAINT "web_pages_blocks_web_accordions_content_items_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_accordions" DROP CONSTRAINT "web_pages_blocks_web_accordions_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_animated_text" DROP CONSTRAINT "web_pages_blocks_web_animatedtext_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_book_list" DROP CONSTRAINT "web_pages_blocks_web_book_list_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_course_list" DROP CONSTRAINT "web_pages_blocks_web_course_list_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_hero_large" DROP CONSTRAINT "web_pages_blocks_web_hero_large_content_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_hero_large" DROP CONSTRAINT "web_pages_blocks_web_hero_large_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_hero_small" DROP CONSTRAINT "web_pages_blocks_web_hero_small_content_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_hero_small" DROP CONSTRAINT "web_pages_blocks_web_hero_small_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_highlighted_links_content_links" DROP CONSTRAINT "web_pages_blocks_web_highlighted_links_content_links_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_highlighted_links_content_links" DROP CONSTRAINT "web_pages_blocks_web_highlighted_links_content_links_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_highlighted_links" DROP CONSTRAINT "web_pages_blocks_web_highlighted_links_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_image_text" DROP CONSTRAINT "web_pages_blocks_web_image_text_content_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_image_text" DROP CONSTRAINT "web_pages_blocks_web_image_text_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_infos_content_infos" DROP CONSTRAINT "web_pages_blocks_web_infos_content_infos_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_infos" DROP CONSTRAINT "web_pages_blocks_web_infos_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_mood_picture" DROP CONSTRAINT "web_pages_blocks_web_mood_picture_content_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_mood_picture" DROP CONSTRAINT "web_pages_blocks_web_mood_picture_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_card_content_cards" DROP CONSTRAINT "web_pages_blocks_web_swiper_card_content_cards_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_card_content_cards" DROP CONSTRAINT "web_pages_blocks_web_swiper_card_content_cards_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_card" DROP CONSTRAINT "web_pages_blocks_web_swiper_card_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_large_content_items" DROP CONSTRAINT "web_pages_blocks_web_swiper_large_content_items_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_large_content_items" DROP CONSTRAINT "web_pages_blocks_web_swiper_large_content_items_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_large" DROP CONSTRAINT "web_pages_blocks_web_swiper_large_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_simple_content_slides_images" DROP CONSTRAINT "web_pages_blocks_web_swiper_simple_content_slides_images_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_simple_content_slides_images" DROP CONSTRAINT "web_pages_blocks_web_swiper_simple_content_slides_images_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_simple_content_slides" DROP CONSTRAINT "web_pages_blocks_web_swiper_simple_content_slides_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_swiper_simple" DROP CONSTRAINT "web_pages_blocks_web_swiper_simple_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_text_element" DROP CONSTRAINT "web_pages_blocks_web_text_element_parent_id_fk";
  
  ALTER TABLE "public_pages_blocks_public_title_element" DROP CONSTRAINT "web_pages_blocks_web_title_element_parent_id_fk";
  
  ALTER TABLE "public_pages" DROP CONSTRAINT "web_pages_image_id_web_images_id_fk";
  
  ALTER TABLE "public_pages_texts" DROP CONSTRAINT "web_pages_texts_parent_fk";
  
  ALTER TABLE "public_pages_rels" DROP CONSTRAINT "web_pages_rels_parent_fk";
  
  ALTER TABLE "public_pages_rels" DROP CONSTRAINT "web_pages_rels_web_books_fk";
  
  ALTER TABLE "public_pages_rels" DROP CONSTRAINT "web_pages_rels_courses_fk";
  
  ALTER TABLE "public_partners" DROP CONSTRAINT "web_partners_image_id_web_images_id_fk";
  
  ALTER TABLE "public_socials" DROP CONSTRAINT "web_socials_background_image_id_web_images_id_fk";
  
  ALTER TABLE "public_books" DROP CONSTRAINT "web_books_cover_id_web_images_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_web_images_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_web_image_categories_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_web_pages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_web_partners_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_web_socials_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_web_books_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_web_text_blocks_fk";
  
  ALTER TABLE "public_footer_links" DROP CONSTRAINT "web_footer_links_parent_id_fk";
  
  ALTER TABLE "public_header_links" DROP CONSTRAINT "web_header_links_parent_id_fk";
  
  ALTER TABLE "public_sidebar_links" DROP CONSTRAINT "web_sidebar_links_parent_id_fk";
  
  DROP INDEX "web_images_updated_at_idx";
  DROP INDEX "web_images_created_at_idx";
  DROP INDEX "web_images_filename_idx";
  DROP INDEX "web_images_sizes_thumbnail_jpeg_sizes_thumbnail_jpeg_fil_idx";
  DROP INDEX "web_images_sizes_thumbnail_webp_sizes_thumbnail_webp_fil_idx";
  DROP INDEX "web_images_sizes_thumbnail_avif_sizes_thumbnail_avif_fil_idx";
  DROP INDEX "web_images_sizes_mobile_jpeg_sizes_mobile_jpeg_filename_idx";
  DROP INDEX "web_images_sizes_mobile_webp_sizes_mobile_webp_filename_idx";
  DROP INDEX "web_images_sizes_mobile_avif_sizes_mobile_avif_filename_idx";
  DROP INDEX "web_images_sizes_tablet_jpeg_sizes_tablet_jpeg_filename_idx";
  DROP INDEX "web_images_sizes_tablet_webp_sizes_tablet_webp_filename_idx";
  DROP INDEX "web_images_sizes_tablet_avif_sizes_tablet_avif_filename_idx";
  DROP INDEX "web_images_sizes_desktop_jpeg_sizes_desktop_jpeg_filenam_idx";
  DROP INDEX "web_images_sizes_desktop_webp_sizes_desktop_webp_filenam_idx";
  DROP INDEX "web_images_sizes_desktop_avif_sizes_desktop_avif_filenam_idx";
  DROP INDEX "web_images_rels_order_idx";
  DROP INDEX "web_images_rels_parent_idx";
  DROP INDEX "web_images_rels_path_idx";
  DROP INDEX "web_images_rels_web_image_categories_id_idx";
  DROP INDEX "web_image_categories_updated_at_idx";
  DROP INDEX "web_image_categories_created_at_idx";
  DROP INDEX "web_pages_blocks_web_accordions_content_items_order_idx";
  DROP INDEX "web_pages_blocks_web_accordions_content_items_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_accordions_order_idx";
  DROP INDEX "web_pages_blocks_web_accordions_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_accordions_path_idx";
  DROP INDEX "web_pages_blocks_web_animatedtext_order_idx";
  DROP INDEX "web_pages_blocks_web_animatedtext_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_animatedtext_path_idx";
  DROP INDEX "web_pages_blocks_web_book_list_order_idx";
  DROP INDEX "web_pages_blocks_web_book_list_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_book_list_path_idx";
  DROP INDEX "web_pages_blocks_web_course_list_order_idx";
  DROP INDEX "web_pages_blocks_web_course_list_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_course_list_path_idx";
  DROP INDEX "web_pages_blocks_web_hero_large_order_idx";
  DROP INDEX "web_pages_blocks_web_hero_large_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_hero_large_path_idx";
  DROP INDEX "web_pages_blocks_web_hero_large_content_content_image_idx";
  DROP INDEX "web_pages_blocks_web_hero_small_order_idx";
  DROP INDEX "web_pages_blocks_web_hero_small_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_hero_small_path_idx";
  DROP INDEX "web_pages_blocks_web_hero_small_content_content_image_idx";
  DROP INDEX "web_pages_blocks_web_highlighted_links_content_links_order_idx";
  DROP INDEX "web_pages_blocks_web_highlighted_links_content_links_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_highlighted_links_content_links_ima_idx";
  DROP INDEX "web_pages_blocks_web_highlighted_links_order_idx";
  DROP INDEX "web_pages_blocks_web_highlighted_links_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_highlighted_links_path_idx";
  DROP INDEX "web_pages_blocks_web_image_text_order_idx";
  DROP INDEX "web_pages_blocks_web_image_text_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_image_text_path_idx";
  DROP INDEX "web_pages_blocks_web_image_text_content_content_image_idx";
  DROP INDEX "web_pages_blocks_web_infos_content_infos_order_idx";
  DROP INDEX "web_pages_blocks_web_infos_content_infos_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_infos_order_idx";
  DROP INDEX "web_pages_blocks_web_infos_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_infos_path_idx";
  DROP INDEX "web_pages_blocks_web_mood_picture_order_idx";
  DROP INDEX "web_pages_blocks_web_mood_picture_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_mood_picture_path_idx";
  DROP INDEX "web_pages_blocks_web_mood_picture_content_content_image_idx";
  DROP INDEX "web_pages_blocks_web_swiper_card_content_cards_order_idx";
  DROP INDEX "web_pages_blocks_web_swiper_card_content_cards_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_swiper_card_content_cards_image_idx";
  DROP INDEX "web_pages_blocks_web_swiper_card_order_idx";
  DROP INDEX "web_pages_blocks_web_swiper_card_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_swiper_card_path_idx";
  DROP INDEX "web_pages_blocks_web_swiper_large_content_items_order_idx";
  DROP INDEX "web_pages_blocks_web_swiper_large_content_items_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_swiper_large_content_items_image_idx";
  DROP INDEX "web_pages_blocks_web_swiper_large_order_idx";
  DROP INDEX "web_pages_blocks_web_swiper_large_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_swiper_large_path_idx";
  DROP INDEX "web_pages_blocks_web_swiper_simple_content_slides_images_order_idx";
  DROP INDEX "web_pages_blocks_web_swiper_simple_content_slides_images_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_swiper_simple_content_slides_images_idx";
  DROP INDEX "web_pages_blocks_web_swiper_simple_content_slides_order_idx";
  DROP INDEX "web_pages_blocks_web_swiper_simple_content_slides_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_swiper_simple_order_idx";
  DROP INDEX "web_pages_blocks_web_swiper_simple_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_swiper_simple_path_idx";
  DROP INDEX "web_pages_blocks_web_text_element_order_idx";
  DROP INDEX "web_pages_blocks_web_text_element_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_text_element_path_idx";
  DROP INDEX "web_pages_blocks_web_title_element_order_idx";
  DROP INDEX "web_pages_blocks_web_title_element_parent_id_idx";
  DROP INDEX "web_pages_blocks_web_title_element_path_idx";
  DROP INDEX "web_pages_slug_idx";
  DROP INDEX "web_pages_image_idx";
  DROP INDEX "web_pages_updated_at_idx";
  DROP INDEX "web_pages_created_at_idx";
  DROP INDEX "web_pages_texts_order_parent";
  DROP INDEX "web_pages_rels_order_idx";
  DROP INDEX "web_pages_rels_parent_idx";
  DROP INDEX "web_pages_rels_path_idx";
  DROP INDEX "web_pages_rels_web_books_id_idx";
  DROP INDEX "web_pages_rels_courses_id_idx";
  DROP INDEX "web_partners_image_idx";
  DROP INDEX "web_partners_updated_at_idx";
  DROP INDEX "web_partners_created_at_idx";
  DROP INDEX "web_socials_background_image_idx";
  DROP INDEX "web_socials_updated_at_idx";
  DROP INDEX "web_socials_created_at_idx";
  DROP INDEX "web_books_cover_idx";
  DROP INDEX "web_books_updated_at_idx";
  DROP INDEX "web_books_created_at_idx";
  DROP INDEX "web_books_filename_idx";
  DROP INDEX "web_text_blocks_updated_at_idx";
  DROP INDEX "web_text_blocks_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_web_images_id_idx";
  DROP INDEX "payload_locked_documents_rels_web_image_categories_id_idx";
  DROP INDEX "payload_locked_documents_rels_web_pages_id_idx";
  DROP INDEX "payload_locked_documents_rels_web_partners_id_idx";
  DROP INDEX "payload_locked_documents_rels_web_socials_id_idx";
  DROP INDEX "payload_locked_documents_rels_web_books_id_idx";
  DROP INDEX "payload_locked_documents_rels_web_text_blocks_id_idx";
  DROP INDEX "web_footer_links_order_idx";
  DROP INDEX "web_footer_links_parent_id_idx";
  DROP INDEX "web_header_links_order_idx";
  DROP INDEX "web_header_links_parent_id_idx";
  DROP INDEX "web_sidebar_links_order_idx";
  DROP INDEX "web_sidebar_links_parent_id_idx";
  ALTER TABLE "public_images_rels" ADD CONSTRAINT "public_images_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."public_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_images_rels" ADD CONSTRAINT "public_images_rels_public_image_categories_fk" FOREIGN KEY ("public_image_categories_id") REFERENCES "public"."public_image_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_accordions_content_items" ADD CONSTRAINT "public_pages_blocks_public_accordions_content_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages_blocks_public_accordions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_accordions" ADD CONSTRAINT "public_pages_blocks_public_accordions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_animated_text" ADD CONSTRAINT "public_pages_blocks_public_animated_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_book_list" ADD CONSTRAINT "public_pages_blocks_public_book_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_course_list" ADD CONSTRAINT "public_pages_blocks_public_course_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_hero_large" ADD CONSTRAINT "public_pages_blocks_public_hero_large_content_image_id_public_images_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_hero_large" ADD CONSTRAINT "public_pages_blocks_public_hero_large_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_hero_small" ADD CONSTRAINT "public_pages_blocks_public_hero_small_content_image_id_public_images_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_hero_small" ADD CONSTRAINT "public_pages_blocks_public_hero_small_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_highlighted_links_content_links" ADD CONSTRAINT "public_pages_blocks_public_highlighted_links_content_links_image_id_public_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_highlighted_links_content_links" ADD CONSTRAINT "public_pages_blocks_public_highlighted_links_content_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages_blocks_public_highlighted_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_highlighted_links" ADD CONSTRAINT "public_pages_blocks_public_highlighted_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_image_text" ADD CONSTRAINT "public_pages_blocks_public_image_text_content_image_id_public_images_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_image_text" ADD CONSTRAINT "public_pages_blocks_public_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_infos_content_infos" ADD CONSTRAINT "public_pages_blocks_public_infos_content_infos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages_blocks_public_infos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_infos" ADD CONSTRAINT "public_pages_blocks_public_infos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_mood_picture" ADD CONSTRAINT "public_pages_blocks_public_mood_picture_content_image_id_public_images_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_mood_picture" ADD CONSTRAINT "public_pages_blocks_public_mood_picture_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_card_content_cards" ADD CONSTRAINT "public_pages_blocks_public_swiper_card_content_cards_image_id_public_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_card_content_cards" ADD CONSTRAINT "public_pages_blocks_public_swiper_card_content_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages_blocks_public_swiper_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_card" ADD CONSTRAINT "public_pages_blocks_public_swiper_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_large_content_items" ADD CONSTRAINT "public_pages_blocks_public_swiper_large_content_items_image_id_public_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_large_content_items" ADD CONSTRAINT "public_pages_blocks_public_swiper_large_content_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages_blocks_public_swiper_large"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_large" ADD CONSTRAINT "public_pages_blocks_public_swiper_large_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_simple_content_slides_images" ADD CONSTRAINT "public_pages_blocks_public_swiper_simple_content_slides_images_image_id_public_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_simple_content_slides_images" ADD CONSTRAINT "public_pages_blocks_public_swiper_simple_content_slides_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages_blocks_public_swiper_simple_content_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_simple_content_slides" ADD CONSTRAINT "public_pages_blocks_public_swiper_simple_content_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages_blocks_public_swiper_simple"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_swiper_simple" ADD CONSTRAINT "public_pages_blocks_public_swiper_simple_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_text_element" ADD CONSTRAINT "public_pages_blocks_public_text_element_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_blocks_public_title_element" ADD CONSTRAINT "public_pages_blocks_public_title_element_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages" ADD CONSTRAINT "public_pages_image_id_public_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_pages_texts" ADD CONSTRAINT "public_pages_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_rels" ADD CONSTRAINT "public_pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_rels" ADD CONSTRAINT "public_pages_rels_public_books_fk" FOREIGN KEY ("public_books_id") REFERENCES "public"."public_books"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_pages_rels" ADD CONSTRAINT "public_pages_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_partners" ADD CONSTRAINT "public_partners_image_id_public_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_socials" ADD CONSTRAINT "public_socials_background_image_id_public_images_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "public_books" ADD CONSTRAINT "public_books_cover_id_public_images_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."public_images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_public_images_fk" FOREIGN KEY ("public_images_id") REFERENCES "public"."public_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_public_image_categories_fk" FOREIGN KEY ("public_image_categories_id") REFERENCES "public"."public_image_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_public_pages_fk" FOREIGN KEY ("public_pages_id") REFERENCES "public"."public_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_public_partners_fk" FOREIGN KEY ("public_partners_id") REFERENCES "public"."public_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_public_socials_fk" FOREIGN KEY ("public_socials_id") REFERENCES "public"."public_socials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_public_books_fk" FOREIGN KEY ("public_books_id") REFERENCES "public"."public_books"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_public_text_blocks_fk" FOREIGN KEY ("public_text_blocks_id") REFERENCES "public"."public_text_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_footer_links" ADD CONSTRAINT "public_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_header_links" ADD CONSTRAINT "public_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "public_sidebar_links" ADD CONSTRAINT "public_sidebar_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."public_sidebar"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "public_images_updated_at_idx" ON "public_images" USING btree ("updated_at");
  CREATE INDEX "public_images_created_at_idx" ON "public_images" USING btree ("created_at");
  CREATE UNIQUE INDEX "public_images_filename_idx" ON "public_images" USING btree ("filename");
  CREATE INDEX "public_images_sizes_thumbnail_jpeg_sizes_thumbnail_jpeg__idx" ON "public_images" USING btree ("sizes_thumbnail_jpeg_filename");
  CREATE INDEX "public_images_sizes_thumbnail_webp_sizes_thumbnail_webp__idx" ON "public_images" USING btree ("sizes_thumbnail_webp_filename");
  CREATE INDEX "public_images_sizes_thumbnail_avif_sizes_thumbnail_avif__idx" ON "public_images" USING btree ("sizes_thumbnail_avif_filename");
  CREATE INDEX "public_images_sizes_mobile_jpeg_sizes_mobile_jpeg_filena_idx" ON "public_images" USING btree ("sizes_mobile_jpeg_filename");
  CREATE INDEX "public_images_sizes_mobile_webp_sizes_mobile_webp_filena_idx" ON "public_images" USING btree ("sizes_mobile_webp_filename");
  CREATE INDEX "public_images_sizes_mobile_avif_sizes_mobile_avif_filena_idx" ON "public_images" USING btree ("sizes_mobile_avif_filename");
  CREATE INDEX "public_images_sizes_tablet_jpeg_sizes_tablet_jpeg_filena_idx" ON "public_images" USING btree ("sizes_tablet_jpeg_filename");
  CREATE INDEX "public_images_sizes_tablet_webp_sizes_tablet_webp_filena_idx" ON "public_images" USING btree ("sizes_tablet_webp_filename");
  CREATE INDEX "public_images_sizes_tablet_avif_sizes_tablet_avif_filena_idx" ON "public_images" USING btree ("sizes_tablet_avif_filename");
  CREATE INDEX "public_images_sizes_desktop_jpeg_sizes_desktop_jpeg_file_idx" ON "public_images" USING btree ("sizes_desktop_jpeg_filename");
  CREATE INDEX "public_images_sizes_desktop_webp_sizes_desktop_webp_file_idx" ON "public_images" USING btree ("sizes_desktop_webp_filename");
  CREATE INDEX "public_images_sizes_desktop_avif_sizes_desktop_avif_file_idx" ON "public_images" USING btree ("sizes_desktop_avif_filename");
  CREATE INDEX "public_images_rels_order_idx" ON "public_images_rels" USING btree ("order");
  CREATE INDEX "public_images_rels_parent_idx" ON "public_images_rels" USING btree ("parent_id");
  CREATE INDEX "public_images_rels_path_idx" ON "public_images_rels" USING btree ("path");
  CREATE INDEX "public_images_rels_public_image_categories_id_idx" ON "public_images_rels" USING btree ("public_image_categories_id");
  CREATE INDEX "public_image_categories_updated_at_idx" ON "public_image_categories" USING btree ("updated_at");
  CREATE INDEX "public_image_categories_created_at_idx" ON "public_image_categories" USING btree ("created_at");
  CREATE INDEX "public_pages_blocks_public_accordions_content_items_order_idx" ON "public_pages_blocks_public_accordions_content_items" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_accordions_content_items_parent_id_idx" ON "public_pages_blocks_public_accordions_content_items" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_accordions_order_idx" ON "public_pages_blocks_public_accordions" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_accordions_parent_id_idx" ON "public_pages_blocks_public_accordions" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_accordions_path_idx" ON "public_pages_blocks_public_accordions" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_animated_text_order_idx" ON "public_pages_blocks_public_animated_text" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_animated_text_parent_id_idx" ON "public_pages_blocks_public_animated_text" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_animated_text_path_idx" ON "public_pages_blocks_public_animated_text" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_book_list_order_idx" ON "public_pages_blocks_public_book_list" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_book_list_parent_id_idx" ON "public_pages_blocks_public_book_list" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_book_list_path_idx" ON "public_pages_blocks_public_book_list" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_course_list_order_idx" ON "public_pages_blocks_public_course_list" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_course_list_parent_id_idx" ON "public_pages_blocks_public_course_list" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_course_list_path_idx" ON "public_pages_blocks_public_course_list" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_hero_large_order_idx" ON "public_pages_blocks_public_hero_large" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_hero_large_parent_id_idx" ON "public_pages_blocks_public_hero_large" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_hero_large_path_idx" ON "public_pages_blocks_public_hero_large" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_hero_large_content_content_im_idx" ON "public_pages_blocks_public_hero_large" USING btree ("content_image_id");
  CREATE INDEX "public_pages_blocks_public_hero_small_order_idx" ON "public_pages_blocks_public_hero_small" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_hero_small_parent_id_idx" ON "public_pages_blocks_public_hero_small" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_hero_small_path_idx" ON "public_pages_blocks_public_hero_small" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_hero_small_content_content_im_idx" ON "public_pages_blocks_public_hero_small" USING btree ("content_image_id");
  CREATE INDEX "public_pages_blocks_public_highlighted_links_content_links_order_idx" ON "public_pages_blocks_public_highlighted_links_content_links" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_highlighted_links_content_links_parent_id_idx" ON "public_pages_blocks_public_highlighted_links_content_links" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_highlighted_links_content_lin_idx" ON "public_pages_blocks_public_highlighted_links_content_links" USING btree ("image_id");
  CREATE INDEX "public_pages_blocks_public_highlighted_links_order_idx" ON "public_pages_blocks_public_highlighted_links" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_highlighted_links_parent_id_idx" ON "public_pages_blocks_public_highlighted_links" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_highlighted_links_path_idx" ON "public_pages_blocks_public_highlighted_links" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_image_text_order_idx" ON "public_pages_blocks_public_image_text" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_image_text_parent_id_idx" ON "public_pages_blocks_public_image_text" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_image_text_path_idx" ON "public_pages_blocks_public_image_text" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_image_text_content_content_im_idx" ON "public_pages_blocks_public_image_text" USING btree ("content_image_id");
  CREATE INDEX "public_pages_blocks_public_infos_content_infos_order_idx" ON "public_pages_blocks_public_infos_content_infos" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_infos_content_infos_parent_id_idx" ON "public_pages_blocks_public_infos_content_infos" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_infos_order_idx" ON "public_pages_blocks_public_infos" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_infos_parent_id_idx" ON "public_pages_blocks_public_infos" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_infos_path_idx" ON "public_pages_blocks_public_infos" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_mood_picture_order_idx" ON "public_pages_blocks_public_mood_picture" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_mood_picture_parent_id_idx" ON "public_pages_blocks_public_mood_picture" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_mood_picture_path_idx" ON "public_pages_blocks_public_mood_picture" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_mood_picture_content_content__idx" ON "public_pages_blocks_public_mood_picture" USING btree ("content_image_id");
  CREATE INDEX "public_pages_blocks_public_swiper_card_content_cards_order_idx" ON "public_pages_blocks_public_swiper_card_content_cards" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_swiper_card_content_cards_parent_id_idx" ON "public_pages_blocks_public_swiper_card_content_cards" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_swiper_card_content_cards_ima_idx" ON "public_pages_blocks_public_swiper_card_content_cards" USING btree ("image_id");
  CREATE INDEX "public_pages_blocks_public_swiper_card_order_idx" ON "public_pages_blocks_public_swiper_card" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_swiper_card_parent_id_idx" ON "public_pages_blocks_public_swiper_card" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_swiper_card_path_idx" ON "public_pages_blocks_public_swiper_card" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_swiper_large_content_items_order_idx" ON "public_pages_blocks_public_swiper_large_content_items" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_swiper_large_content_items_parent_id_idx" ON "public_pages_blocks_public_swiper_large_content_items" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_swiper_large_content_items_im_idx" ON "public_pages_blocks_public_swiper_large_content_items" USING btree ("image_id");
  CREATE INDEX "public_pages_blocks_public_swiper_large_order_idx" ON "public_pages_blocks_public_swiper_large" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_swiper_large_parent_id_idx" ON "public_pages_blocks_public_swiper_large" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_swiper_large_path_idx" ON "public_pages_blocks_public_swiper_large" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_swiper_simple_content_slides_images_order_idx" ON "public_pages_blocks_public_swiper_simple_content_slides_images" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_swiper_simple_content_slides_images_parent_id_idx" ON "public_pages_blocks_public_swiper_simple_content_slides_images" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_swiper_simple_content_slides__idx" ON "public_pages_blocks_public_swiper_simple_content_slides_images" USING btree ("image_id");
  CREATE INDEX "public_pages_blocks_public_swiper_simple_content_slides_order_idx" ON "public_pages_blocks_public_swiper_simple_content_slides" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_swiper_simple_content_slides_parent_id_idx" ON "public_pages_blocks_public_swiper_simple_content_slides" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_swiper_simple_order_idx" ON "public_pages_blocks_public_swiper_simple" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_swiper_simple_parent_id_idx" ON "public_pages_blocks_public_swiper_simple" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_swiper_simple_path_idx" ON "public_pages_blocks_public_swiper_simple" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_text_element_order_idx" ON "public_pages_blocks_public_text_element" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_text_element_parent_id_idx" ON "public_pages_blocks_public_text_element" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_text_element_path_idx" ON "public_pages_blocks_public_text_element" USING btree ("_path");
  CREATE INDEX "public_pages_blocks_public_title_element_order_idx" ON "public_pages_blocks_public_title_element" USING btree ("_order");
  CREATE INDEX "public_pages_blocks_public_title_element_parent_id_idx" ON "public_pages_blocks_public_title_element" USING btree ("_parent_id");
  CREATE INDEX "public_pages_blocks_public_title_element_path_idx" ON "public_pages_blocks_public_title_element" USING btree ("_path");
  CREATE UNIQUE INDEX "public_pages_slug_idx" ON "public_pages" USING btree ("slug");
  CREATE INDEX "public_pages_image_idx" ON "public_pages" USING btree ("image_id");
  CREATE INDEX "public_pages_updated_at_idx" ON "public_pages" USING btree ("updated_at");
  CREATE INDEX "public_pages_created_at_idx" ON "public_pages" USING btree ("created_at");
  CREATE INDEX "public_pages_texts_order_parent" ON "public_pages_texts" USING btree ("order","parent_id");
  CREATE INDEX "public_pages_rels_order_idx" ON "public_pages_rels" USING btree ("order");
  CREATE INDEX "public_pages_rels_parent_idx" ON "public_pages_rels" USING btree ("parent_id");
  CREATE INDEX "public_pages_rels_path_idx" ON "public_pages_rels" USING btree ("path");
  CREATE INDEX "public_pages_rels_public_books_id_idx" ON "public_pages_rels" USING btree ("public_books_id");
  CREATE INDEX "public_pages_rels_courses_id_idx" ON "public_pages_rels" USING btree ("courses_id");
  CREATE INDEX "public_partners_image_idx" ON "public_partners" USING btree ("image_id");
  CREATE INDEX "public_partners_updated_at_idx" ON "public_partners" USING btree ("updated_at");
  CREATE INDEX "public_partners_created_at_idx" ON "public_partners" USING btree ("created_at");
  CREATE INDEX "public_socials_background_image_idx" ON "public_socials" USING btree ("background_image_id");
  CREATE INDEX "public_socials_updated_at_idx" ON "public_socials" USING btree ("updated_at");
  CREATE INDEX "public_socials_created_at_idx" ON "public_socials" USING btree ("created_at");
  CREATE INDEX "public_books_cover_idx" ON "public_books" USING btree ("cover_id");
  CREATE INDEX "public_books_updated_at_idx" ON "public_books" USING btree ("updated_at");
  CREATE INDEX "public_books_created_at_idx" ON "public_books" USING btree ("created_at");
  CREATE UNIQUE INDEX "public_books_filename_idx" ON "public_books" USING btree ("filename");
  CREATE INDEX "public_text_blocks_updated_at_idx" ON "public_text_blocks" USING btree ("updated_at");
  CREATE INDEX "public_text_blocks_created_at_idx" ON "public_text_blocks" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_public_images_id_idx" ON "payload_locked_documents_rels" USING btree ("public_images_id");
  CREATE INDEX "payload_locked_documents_rels_public_image_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("public_image_categories_id");
  CREATE INDEX "payload_locked_documents_rels_public_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("public_pages_id");
  CREATE INDEX "payload_locked_documents_rels_public_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("public_partners_id");
  CREATE INDEX "payload_locked_documents_rels_public_socials_id_idx" ON "payload_locked_documents_rels" USING btree ("public_socials_id");
  CREATE INDEX "payload_locked_documents_rels_public_books_id_idx" ON "payload_locked_documents_rels" USING btree ("public_books_id");
  CREATE INDEX "payload_locked_documents_rels_public_text_blocks_id_idx" ON "payload_locked_documents_rels" USING btree ("public_text_blocks_id");
  CREATE INDEX "public_footer_links_order_idx" ON "public_footer_links" USING btree ("_order");
  CREATE INDEX "public_footer_links_parent_id_idx" ON "public_footer_links" USING btree ("_parent_id");
  CREATE INDEX "public_header_links_order_idx" ON "public_header_links" USING btree ("_order");
  CREATE INDEX "public_header_links_parent_id_idx" ON "public_header_links" USING btree ("_parent_id");
  CREATE INDEX "public_sidebar_links_order_idx" ON "public_sidebar_links" USING btree ("_order");
  CREATE INDEX "public_sidebar_links_parent_id_idx" ON "public_sidebar_links" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_public_pages_schema_type" RENAME TO "enum_web_pages_schema_type";
  ALTER TABLE "public_images" RENAME TO "web_images";
  ALTER TABLE "public_images_rels" RENAME TO "web_images_rels";
  ALTER TABLE "public_image_categories" RENAME TO "web_image_categories";
  ALTER TABLE "public_pages_blocks_public_accordions_content_items" RENAME TO "web_pages_blocks_web_accordions_content_items";
  ALTER TABLE "public_pages_blocks_public_accordions" RENAME TO "web_pages_blocks_web_accordions";
  ALTER TABLE "public_pages_blocks_public_animated_text" RENAME TO "web_pages_blocks_web_animatedtext";
  ALTER TABLE "public_pages_blocks_public_book_list" RENAME TO "web_pages_blocks_web_book_list";
  ALTER TABLE "public_pages_blocks_public_course_list" RENAME TO "web_pages_blocks_web_course_list";
  ALTER TABLE "public_pages_blocks_public_hero_large" RENAME TO "web_pages_blocks_web_hero_large";
  ALTER TABLE "public_pages_blocks_public_hero_small" RENAME TO "web_pages_blocks_web_hero_small";
  ALTER TABLE "public_pages_blocks_public_highlighted_links_content_links" RENAME TO "web_pages_blocks_web_highlighted_links_content_links";
  ALTER TABLE "public_pages_blocks_public_highlighted_links" RENAME TO "web_pages_blocks_web_highlighted_links";
  ALTER TABLE "public_pages_blocks_public_image_text" RENAME TO "web_pages_blocks_web_image_text";
  ALTER TABLE "public_pages_blocks_public_infos_content_infos" RENAME TO "web_pages_blocks_web_infos_content_infos";
  ALTER TABLE "public_pages_blocks_public_infos" RENAME TO "web_pages_blocks_web_infos";
  ALTER TABLE "public_pages_blocks_public_mood_picture" RENAME TO "web_pages_blocks_web_mood_picture";
  ALTER TABLE "public_pages_blocks_public_swiper_card_content_cards" RENAME TO "web_pages_blocks_web_swiper_card_content_cards";
  ALTER TABLE "public_pages_blocks_public_swiper_card" RENAME TO "web_pages_blocks_web_swiper_card";
  ALTER TABLE "public_pages_blocks_public_swiper_large_content_items" RENAME TO "web_pages_blocks_web_swiper_large_content_items";
  ALTER TABLE "public_pages_blocks_public_swiper_large" RENAME TO "web_pages_blocks_web_swiper_large";
  ALTER TABLE "public_pages_blocks_public_swiper_simple_content_slides_images" RENAME TO "web_pages_blocks_web_swiper_simple_content_slides_images";
  ALTER TABLE "public_pages_blocks_public_swiper_simple_content_slides" RENAME TO "web_pages_blocks_web_swiper_simple_content_slides";
  ALTER TABLE "public_pages_blocks_public_swiper_simple" RENAME TO "web_pages_blocks_web_swiper_simple";
  ALTER TABLE "public_pages_blocks_public_text_element" RENAME TO "web_pages_blocks_web_text_element";
  ALTER TABLE "public_pages_blocks_public_title_element" RENAME TO "web_pages_blocks_web_title_element";
  ALTER TABLE "public_pages" RENAME TO "web_pages";
  ALTER TABLE "public_pages_texts" RENAME TO "web_pages_texts";
  ALTER TABLE "public_pages_rels" RENAME TO "web_pages_rels";
  ALTER TABLE "public_partners" RENAME TO "web_partners";
  ALTER TABLE "public_socials" RENAME TO "web_socials";
  ALTER TABLE "public_books" RENAME TO "web_books";
  ALTER TABLE "public_text_blocks" RENAME TO "web_text_blocks";
  ALTER TABLE "public_footer_links" RENAME TO "web_footer_links";
  ALTER TABLE "public_footer" RENAME TO "web_footer";
  ALTER TABLE "public_header_links" RENAME TO "web_header_links";
  ALTER TABLE "public_header" RENAME TO "web_header";
  ALTER TABLE "public_sidebar_links" RENAME TO "web_sidebar_links";
  ALTER TABLE "public_sidebar" RENAME TO "web_sidebar";
  ALTER TABLE "web_images_rels" RENAME COLUMN "public_image_categories_id" TO "web_image_categories_id";
  ALTER TABLE "web_pages_rels" RENAME COLUMN "public_books_id" TO "web_books_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "public_images_id" TO "web_images_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "public_image_categories_id" TO "web_image_categories_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "public_pages_id" TO "web_pages_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "public_partners_id" TO "web_partners_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "public_socials_id" TO "web_socials_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "public_books_id" TO "web_books_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "public_text_blocks_id" TO "web_text_blocks_id";
  ALTER TABLE "web_images_rels" DROP CONSTRAINT "public_images_rels_parent_fk";
  
  ALTER TABLE "web_images_rels" DROP CONSTRAINT "public_images_rels_public_image_categories_fk";
  
  ALTER TABLE "web_pages_blocks_web_accordions_content_items" DROP CONSTRAINT "public_pages_blocks_public_accordions_content_items_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_accordions" DROP CONSTRAINT "public_pages_blocks_public_accordions_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_animatedtext" DROP CONSTRAINT "public_pages_blocks_public_animated_text_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_book_list" DROP CONSTRAINT "public_pages_blocks_public_book_list_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_course_list" DROP CONSTRAINT "public_pages_blocks_public_course_list_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_hero_large" DROP CONSTRAINT "public_pages_blocks_public_hero_large_content_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_hero_large" DROP CONSTRAINT "public_pages_blocks_public_hero_large_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_hero_small" DROP CONSTRAINT "public_pages_blocks_public_hero_small_content_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_hero_small" DROP CONSTRAINT "public_pages_blocks_public_hero_small_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_highlighted_links_content_links" DROP CONSTRAINT "public_pages_blocks_public_highlighted_links_content_links_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_highlighted_links_content_links" DROP CONSTRAINT "public_pages_blocks_public_highlighted_links_content_links_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_highlighted_links" DROP CONSTRAINT "public_pages_blocks_public_highlighted_links_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_image_text" DROP CONSTRAINT "public_pages_blocks_public_image_text_content_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_image_text" DROP CONSTRAINT "public_pages_blocks_public_image_text_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_infos_content_infos" DROP CONSTRAINT "public_pages_blocks_public_infos_content_infos_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_infos" DROP CONSTRAINT "public_pages_blocks_public_infos_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_mood_picture" DROP CONSTRAINT "public_pages_blocks_public_mood_picture_content_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_mood_picture" DROP CONSTRAINT "public_pages_blocks_public_mood_picture_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_card_content_cards" DROP CONSTRAINT "public_pages_blocks_public_swiper_card_content_cards_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_card_content_cards" DROP CONSTRAINT "public_pages_blocks_public_swiper_card_content_cards_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_card" DROP CONSTRAINT "public_pages_blocks_public_swiper_card_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_large_content_items" DROP CONSTRAINT "public_pages_blocks_public_swiper_large_content_items_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_large_content_items" DROP CONSTRAINT "public_pages_blocks_public_swiper_large_content_items_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_large" DROP CONSTRAINT "public_pages_blocks_public_swiper_large_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_simple_content_slides_images" DROP CONSTRAINT "public_pages_blocks_public_swiper_simple_content_slides_images_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_simple_content_slides_images" DROP CONSTRAINT "public_pages_blocks_public_swiper_simple_content_slides_images_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_simple_content_slides" DROP CONSTRAINT "public_pages_blocks_public_swiper_simple_content_slides_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_swiper_simple" DROP CONSTRAINT "public_pages_blocks_public_swiper_simple_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_text_element" DROP CONSTRAINT "public_pages_blocks_public_text_element_parent_id_fk";
  
  ALTER TABLE "web_pages_blocks_web_title_element" DROP CONSTRAINT "public_pages_blocks_public_title_element_parent_id_fk";
  
  ALTER TABLE "web_pages" DROP CONSTRAINT "public_pages_image_id_public_images_id_fk";
  
  ALTER TABLE "web_pages_texts" DROP CONSTRAINT "public_pages_texts_parent_fk";
  
  ALTER TABLE "web_pages_rels" DROP CONSTRAINT "public_pages_rels_parent_fk";
  
  ALTER TABLE "web_pages_rels" DROP CONSTRAINT "public_pages_rels_public_books_fk";
  
  ALTER TABLE "web_pages_rels" DROP CONSTRAINT "public_pages_rels_courses_fk";
  
  ALTER TABLE "web_partners" DROP CONSTRAINT "public_partners_image_id_public_images_id_fk";
  
  ALTER TABLE "web_socials" DROP CONSTRAINT "public_socials_background_image_id_public_images_id_fk";
  
  ALTER TABLE "web_books" DROP CONSTRAINT "public_books_cover_id_public_images_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_public_images_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_public_image_categories_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_public_pages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_public_partners_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_public_socials_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_public_books_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_public_text_blocks_fk";
  
  ALTER TABLE "web_footer_links" DROP CONSTRAINT "public_footer_links_parent_id_fk";
  
  ALTER TABLE "web_header_links" DROP CONSTRAINT "public_header_links_parent_id_fk";
  
  ALTER TABLE "web_sidebar_links" DROP CONSTRAINT "public_sidebar_links_parent_id_fk";
  
  DROP INDEX "public_images_updated_at_idx";
  DROP INDEX "public_images_created_at_idx";
  DROP INDEX "public_images_filename_idx";
  DROP INDEX "public_images_sizes_thumbnail_jpeg_sizes_thumbnail_jpeg__idx";
  DROP INDEX "public_images_sizes_thumbnail_webp_sizes_thumbnail_webp__idx";
  DROP INDEX "public_images_sizes_thumbnail_avif_sizes_thumbnail_avif__idx";
  DROP INDEX "public_images_sizes_mobile_jpeg_sizes_mobile_jpeg_filena_idx";
  DROP INDEX "public_images_sizes_mobile_webp_sizes_mobile_webp_filena_idx";
  DROP INDEX "public_images_sizes_mobile_avif_sizes_mobile_avif_filena_idx";
  DROP INDEX "public_images_sizes_tablet_jpeg_sizes_tablet_jpeg_filena_idx";
  DROP INDEX "public_images_sizes_tablet_webp_sizes_tablet_webp_filena_idx";
  DROP INDEX "public_images_sizes_tablet_avif_sizes_tablet_avif_filena_idx";
  DROP INDEX "public_images_sizes_desktop_jpeg_sizes_desktop_jpeg_file_idx";
  DROP INDEX "public_images_sizes_desktop_webp_sizes_desktop_webp_file_idx";
  DROP INDEX "public_images_sizes_desktop_avif_sizes_desktop_avif_file_idx";
  DROP INDEX "public_images_rels_order_idx";
  DROP INDEX "public_images_rels_parent_idx";
  DROP INDEX "public_images_rels_path_idx";
  DROP INDEX "public_images_rels_public_image_categories_id_idx";
  DROP INDEX "public_image_categories_updated_at_idx";
  DROP INDEX "public_image_categories_created_at_idx";
  DROP INDEX "public_pages_blocks_public_accordions_content_items_order_idx";
  DROP INDEX "public_pages_blocks_public_accordions_content_items_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_accordions_order_idx";
  DROP INDEX "public_pages_blocks_public_accordions_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_accordions_path_idx";
  DROP INDEX "public_pages_blocks_public_animated_text_order_idx";
  DROP INDEX "public_pages_blocks_public_animated_text_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_animated_text_path_idx";
  DROP INDEX "public_pages_blocks_public_book_list_order_idx";
  DROP INDEX "public_pages_blocks_public_book_list_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_book_list_path_idx";
  DROP INDEX "public_pages_blocks_public_course_list_order_idx";
  DROP INDEX "public_pages_blocks_public_course_list_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_course_list_path_idx";
  DROP INDEX "public_pages_blocks_public_hero_large_order_idx";
  DROP INDEX "public_pages_blocks_public_hero_large_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_hero_large_path_idx";
  DROP INDEX "public_pages_blocks_public_hero_large_content_content_im_idx";
  DROP INDEX "public_pages_blocks_public_hero_small_order_idx";
  DROP INDEX "public_pages_blocks_public_hero_small_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_hero_small_path_idx";
  DROP INDEX "public_pages_blocks_public_hero_small_content_content_im_idx";
  DROP INDEX "public_pages_blocks_public_highlighted_links_content_links_order_idx";
  DROP INDEX "public_pages_blocks_public_highlighted_links_content_links_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_highlighted_links_content_lin_idx";
  DROP INDEX "public_pages_blocks_public_highlighted_links_order_idx";
  DROP INDEX "public_pages_blocks_public_highlighted_links_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_highlighted_links_path_idx";
  DROP INDEX "public_pages_blocks_public_image_text_order_idx";
  DROP INDEX "public_pages_blocks_public_image_text_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_image_text_path_idx";
  DROP INDEX "public_pages_blocks_public_image_text_content_content_im_idx";
  DROP INDEX "public_pages_blocks_public_infos_content_infos_order_idx";
  DROP INDEX "public_pages_blocks_public_infos_content_infos_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_infos_order_idx";
  DROP INDEX "public_pages_blocks_public_infos_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_infos_path_idx";
  DROP INDEX "public_pages_blocks_public_mood_picture_order_idx";
  DROP INDEX "public_pages_blocks_public_mood_picture_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_mood_picture_path_idx";
  DROP INDEX "public_pages_blocks_public_mood_picture_content_content__idx";
  DROP INDEX "public_pages_blocks_public_swiper_card_content_cards_order_idx";
  DROP INDEX "public_pages_blocks_public_swiper_card_content_cards_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_swiper_card_content_cards_ima_idx";
  DROP INDEX "public_pages_blocks_public_swiper_card_order_idx";
  DROP INDEX "public_pages_blocks_public_swiper_card_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_swiper_card_path_idx";
  DROP INDEX "public_pages_blocks_public_swiper_large_content_items_order_idx";
  DROP INDEX "public_pages_blocks_public_swiper_large_content_items_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_swiper_large_content_items_im_idx";
  DROP INDEX "public_pages_blocks_public_swiper_large_order_idx";
  DROP INDEX "public_pages_blocks_public_swiper_large_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_swiper_large_path_idx";
  DROP INDEX "public_pages_blocks_public_swiper_simple_content_slides_images_order_idx";
  DROP INDEX "public_pages_blocks_public_swiper_simple_content_slides_images_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_swiper_simple_content_slides__idx";
  DROP INDEX "public_pages_blocks_public_swiper_simple_content_slides_order_idx";
  DROP INDEX "public_pages_blocks_public_swiper_simple_content_slides_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_swiper_simple_order_idx";
  DROP INDEX "public_pages_blocks_public_swiper_simple_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_swiper_simple_path_idx";
  DROP INDEX "public_pages_blocks_public_text_element_order_idx";
  DROP INDEX "public_pages_blocks_public_text_element_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_text_element_path_idx";
  DROP INDEX "public_pages_blocks_public_title_element_order_idx";
  DROP INDEX "public_pages_blocks_public_title_element_parent_id_idx";
  DROP INDEX "public_pages_blocks_public_title_element_path_idx";
  DROP INDEX "public_pages_slug_idx";
  DROP INDEX "public_pages_image_idx";
  DROP INDEX "public_pages_updated_at_idx";
  DROP INDEX "public_pages_created_at_idx";
  DROP INDEX "public_pages_texts_order_parent";
  DROP INDEX "public_pages_rels_order_idx";
  DROP INDEX "public_pages_rels_parent_idx";
  DROP INDEX "public_pages_rels_path_idx";
  DROP INDEX "public_pages_rels_public_books_id_idx";
  DROP INDEX "public_pages_rels_courses_id_idx";
  DROP INDEX "public_partners_image_idx";
  DROP INDEX "public_partners_updated_at_idx";
  DROP INDEX "public_partners_created_at_idx";
  DROP INDEX "public_socials_background_image_idx";
  DROP INDEX "public_socials_updated_at_idx";
  DROP INDEX "public_socials_created_at_idx";
  DROP INDEX "public_books_cover_idx";
  DROP INDEX "public_books_updated_at_idx";
  DROP INDEX "public_books_created_at_idx";
  DROP INDEX "public_books_filename_idx";
  DROP INDEX "public_text_blocks_updated_at_idx";
  DROP INDEX "public_text_blocks_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_public_images_id_idx";
  DROP INDEX "payload_locked_documents_rels_public_image_categories_id_idx";
  DROP INDEX "payload_locked_documents_rels_public_pages_id_idx";
  DROP INDEX "payload_locked_documents_rels_public_partners_id_idx";
  DROP INDEX "payload_locked_documents_rels_public_socials_id_idx";
  DROP INDEX "payload_locked_documents_rels_public_books_id_idx";
  DROP INDEX "payload_locked_documents_rels_public_text_blocks_id_idx";
  DROP INDEX "public_footer_links_order_idx";
  DROP INDEX "public_footer_links_parent_id_idx";
  DROP INDEX "public_header_links_order_idx";
  DROP INDEX "public_header_links_parent_id_idx";
  DROP INDEX "public_sidebar_links_order_idx";
  DROP INDEX "public_sidebar_links_parent_id_idx";
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
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_images_fk" FOREIGN KEY ("web_images_id") REFERENCES "public"."web_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_image_categories_fk" FOREIGN KEY ("web_image_categories_id") REFERENCES "public"."web_image_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_pages_fk" FOREIGN KEY ("web_pages_id") REFERENCES "public"."web_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_partners_fk" FOREIGN KEY ("web_partners_id") REFERENCES "public"."web_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_socials_fk" FOREIGN KEY ("web_socials_id") REFERENCES "public"."web_socials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_books_fk" FOREIGN KEY ("web_books_id") REFERENCES "public"."web_books"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_web_text_blocks_fk" FOREIGN KEY ("web_text_blocks_id") REFERENCES "public"."web_text_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_footer_links" ADD CONSTRAINT "web_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_header_links" ADD CONSTRAINT "web_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_sidebar_links" ADD CONSTRAINT "web_sidebar_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_sidebar"("id") ON DELETE cascade ON UPDATE no action;
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
  CREATE INDEX "payload_locked_documents_rels_web_images_id_idx" ON "payload_locked_documents_rels" USING btree ("web_images_id");
  CREATE INDEX "payload_locked_documents_rels_web_image_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("web_image_categories_id");
  CREATE INDEX "payload_locked_documents_rels_web_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("web_pages_id");
  CREATE INDEX "payload_locked_documents_rels_web_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("web_partners_id");
  CREATE INDEX "payload_locked_documents_rels_web_socials_id_idx" ON "payload_locked_documents_rels" USING btree ("web_socials_id");
  CREATE INDEX "payload_locked_documents_rels_web_books_id_idx" ON "payload_locked_documents_rels" USING btree ("web_books_id");
  CREATE INDEX "payload_locked_documents_rels_web_text_blocks_id_idx" ON "payload_locked_documents_rels" USING btree ("web_text_blocks_id");
  CREATE INDEX "web_footer_links_order_idx" ON "web_footer_links" USING btree ("_order");
  CREATE INDEX "web_footer_links_parent_id_idx" ON "web_footer_links" USING btree ("_parent_id");
  CREATE INDEX "web_header_links_order_idx" ON "web_header_links" USING btree ("_order");
  CREATE INDEX "web_header_links_parent_id_idx" ON "web_header_links" USING btree ("_parent_id");
  CREATE INDEX "web_sidebar_links_order_idx" ON "web_sidebar_links" USING btree ("_order");
  CREATE INDEX "web_sidebar_links_parent_id_idx" ON "web_sidebar_links" USING btree ("_parent_id");`)
}
