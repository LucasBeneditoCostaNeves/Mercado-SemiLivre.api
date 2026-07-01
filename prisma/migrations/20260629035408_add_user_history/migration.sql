-- CreateTable
CREATE TABLE "UserSearchHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "term" VARCHAR(255) NOT NULL,
    "searchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSearchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProductClicks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "sourcePage" VARCHAR(100) NOT NULL,
    "clickedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProductClicks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserSearchHistory_userId_searchedAt_idx" ON "UserSearchHistory"("userId", "searchedAt" DESC);

-- CreateIndex
CREATE INDEX "UserProductClicks_userId_clickedAt_idx" ON "UserProductClicks"("userId", "clickedAt" DESC);

-- AddForeignKey
ALTER TABLE "UserSearchHistory" ADD CONSTRAINT "UserSearchHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProductClicks" ADD CONSTRAINT "UserProductClicks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
