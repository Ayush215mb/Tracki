/*
  Warnings:

  - You are about to drop the column `TaskId` on the `Completion` table. All the data in the column will be lost.
  - You are about to drop the column `completed` on the `Completion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Completion" DROP COLUMN "TaskId",
DROP COLUMN "completed",
ADD COLUMN     "scoredPoint" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalPoint" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "TaskList" (
    "taskId" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TaskList_pkey" PRIMARY KEY ("taskId")
);

-- CreateTable
CREATE TABLE "_CompletionToTaskList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CompletionToTaskList_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CompletionToTaskList_B_index" ON "_CompletionToTaskList"("B");

-- AddForeignKey
ALTER TABLE "_CompletionToTaskList" ADD CONSTRAINT "_CompletionToTaskList_A_fkey" FOREIGN KEY ("A") REFERENCES "Completion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompletionToTaskList" ADD CONSTRAINT "_CompletionToTaskList_B_fkey" FOREIGN KEY ("B") REFERENCES "TaskList"("taskId") ON DELETE CASCADE ON UPDATE CASCADE;
