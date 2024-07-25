-- CreateEnum
CREATE TYPE "Source" AS ENUM ('rozetka', 'telemart');

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(256) NOT NULL,
    "subtitle" VARCHAR(500),
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "specifications" TEXT NOT NULL,
    "type" VARCHAR(128) NOT NULL,
    "profileImage" VARCHAR(1024) NOT NULL,
    "source" "Source" NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
