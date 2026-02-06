/*
  Warnings:

  - Added the required column `month` to the `Completion` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `date` on the `Completion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Completion" ADD COLUMN     "month" INTEGER NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" INTEGER NOT NULL;
