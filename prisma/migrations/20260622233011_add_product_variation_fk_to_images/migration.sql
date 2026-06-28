/*
  Warnings:

  - Added the required column `product_variation_id` to the `productVariationImages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "productVariationImages" ADD COLUMN     "product_variation_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "productVariationImages" ADD CONSTRAINT "productVariationImages_product_variation_id_fkey" FOREIGN KEY ("product_variation_id") REFERENCES "ProductVariation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
