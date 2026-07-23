-- CreateEnum
CREATE TYPE "FulfillmentStatus" AS ENUM ('PENDING', 'IN_PRODUCTION', 'SHIPPED', 'RECEIVED');

-- AlterTable
ALTER TABLE "OrderItems" ADD COLUMN     "fulfillmentStatus" "FulfillmentStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "inProductionAt" TIMESTAMP(3),
ADD COLUMN     "receivedAt" TIMESTAMP(3),
ADD COLUMN     "shippedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "shippingCep" TEXT,
ADD COLUMN     "shippingCity" TEXT,
ADD COLUMN     "shippingComplement" TEXT,
ADD COLUMN     "shippingNumber" TEXT,
ADD COLUMN     "shippingState" TEXT,
ADD COLUMN     "shippingStreet" TEXT;
