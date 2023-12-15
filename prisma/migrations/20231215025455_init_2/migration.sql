/*
  Warnings:

  - Made the column `userId` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `trueEmail` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "trueEmail" SET NOT NULL;
