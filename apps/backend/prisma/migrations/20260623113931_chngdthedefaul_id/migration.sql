/*
  Warnings:

  - The values [daily,weekly,custom] on the enum `HabitFrequency` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `habit_logs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `habit_logs` table. All the data in the column will be lost.
  - You are about to drop the column `habit_id` on the `habit_logs` table. All the data in the column will be lost.
  - You are about to drop the column `log_date` on the `habit_logs` table. All the data in the column will be lost.
  - You are about to drop the column `points_earned` on the `habit_logs` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `habit_logs` table. All the data in the column will be lost.
  - The primary key for the `habits` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `habit_streak` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `points_value` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `scheduled_days` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `habits` table. All the data in the column will be lost.
  - The primary key for the `profiles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `app_streak` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `photo_url` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `total_score` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `profiles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[habitId,logDate]` on the table `habit_logs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `habitId` to the `habit_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logDate` to the `habit_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `habit_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `habits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `habits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "HabitFrequency_new" AS ENUM ('DAILY', 'WEEKLY', 'CUSTOM');
ALTER TABLE "public"."habits" ALTER COLUMN "frequency" DROP DEFAULT;
ALTER TABLE "habits" ALTER COLUMN "frequency" TYPE "HabitFrequency_new" USING ("frequency"::text::"HabitFrequency_new");
ALTER TYPE "HabitFrequency" RENAME TO "HabitFrequency_old";
ALTER TYPE "HabitFrequency_new" RENAME TO "HabitFrequency";
DROP TYPE "public"."HabitFrequency_old";
ALTER TABLE "habits" ALTER COLUMN "frequency" SET DEFAULT 'DAILY';
COMMIT;

-- DropForeignKey
ALTER TABLE "habit_logs" DROP CONSTRAINT "habit_logs_habit_id_fkey";

-- DropForeignKey
ALTER TABLE "habit_logs" DROP CONSTRAINT "habit_logs_user_id_fkey";

-- DropForeignKey
ALTER TABLE "habits" DROP CONSTRAINT "habits_user_id_fkey";

-- DropIndex
DROP INDEX "habit_logs_habit_id_log_date_key";

-- DropIndex
DROP INDEX "habit_logs_user_id_log_date_idx";

-- DropIndex
DROP INDEX "habits_user_id_idx";

-- AlterTable
ALTER TABLE "habit_logs" DROP CONSTRAINT "habit_logs_pkey",
DROP COLUMN "created_at",
DROP COLUMN "habit_id",
DROP COLUMN "log_date",
DROP COLUMN "points_earned",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "habitId" TEXT NOT NULL,
ADD COLUMN     "logDate" DATE NOT NULL,
ADD COLUMN     "pointsEarned" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "habit_logs_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "habits" DROP CONSTRAINT "habits_pkey",
DROP COLUMN "created_at",
DROP COLUMN "habit_streak",
DROP COLUMN "is_active",
DROP COLUMN "points_value",
DROP COLUMN "scheduled_days",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "habitStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "pointsValue" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "scheduledDays" INTEGER[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "frequency" SET DEFAULT 'DAILY',
ADD CONSTRAINT "habits_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_pkey",
DROP COLUMN "app_streak",
DROP COLUMN "created_at",
DROP COLUMN "photo_url",
DROP COLUMN "total_score",
DROP COLUMN "updated_at",
ADD COLUMN     "appStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "photoUrl" TEXT,
ADD COLUMN     "totalScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "habit_logs_userId_logDate_idx" ON "habit_logs"("userId", "logDate");

-- CreateIndex
CREATE UNIQUE INDEX "habit_logs_habitId_logDate_key" ON "habit_logs"("habitId", "logDate");

-- CreateIndex
CREATE INDEX "habits_userId_idx" ON "habits"("userId");

-- AddForeignKey
ALTER TABLE "habits" ADD CONSTRAINT "habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_logs" ADD CONSTRAINT "habit_logs_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_logs" ADD CONSTRAINT "habit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
