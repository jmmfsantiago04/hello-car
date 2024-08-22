/*
  Warnings:

  - You are about to drop the `Inquiry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Inquiry";

-- CreateTable
CREATE TABLE "Consultation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "desiredCar" TEXT NOT NULL,
    "purchaseMethod" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);
