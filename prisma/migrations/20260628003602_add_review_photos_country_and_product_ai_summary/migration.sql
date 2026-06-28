-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "aiSummary" TEXT;

-- AlterTable
ALTER TABLE "ReviewProduct" ADD COLUMN     "country" TEXT,
ADD COLUMN     "photos" TEXT[];
