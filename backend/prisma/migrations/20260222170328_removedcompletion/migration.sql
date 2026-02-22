/*
  Warnings:

  - You are about to drop the `Completion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CompletionToTaskList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CompletionToTaskList" DROP CONSTRAINT "_CompletionToTaskList_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompletionToTaskList" DROP CONSTRAINT "_CompletionToTaskList_B_fkey";

-- DropTable
DROP TABLE "Completion";

-- DropTable
DROP TABLE "TaskList";

-- DropTable
DROP TABLE "_CompletionToTaskList";
