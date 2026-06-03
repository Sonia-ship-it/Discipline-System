-- CreateEnum
CREATE TYPE "PhoneBorrowStatus" AS ENUM ('BORROWED', 'RETURNED');

-- CreateTable
CREATE TABLE "PhoneBorrow" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "phoneModel" TEXT NOT NULL DEFAULT 'Mara Z',
    "borrowedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnedAt" TIMESTAMP(3),
    "status" "PhoneBorrowStatus" NOT NULL DEFAULT 'BORROWED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhoneBorrow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PhoneBorrow" ADD CONSTRAINT "PhoneBorrow_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
