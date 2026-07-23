-- AlterTable
ALTER TABLE "ReviewProduct" ADD COLUMN     "order_item_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ReviewProduct_order_item_id_key" ON "ReviewProduct"("order_item_id");

-- AddForeignKey
ALTER TABLE "ReviewProduct" ADD CONSTRAINT "ReviewProduct_order_item_id_fkey" FOREIGN KEY ("order_item_id") REFERENCES "OrderItems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

