/*
  Warnings:

  - The primary key for the `Completion` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Completion" DROP CONSTRAINT "Completion_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Completion_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Completion_id_seq";
