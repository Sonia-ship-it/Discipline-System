-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN', 'OUT', 'RETURNED');

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "fatherPhoneNumber" TEXT NOT NULL,
    "motherPhoneNumber" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "classGroup" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'IN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineRecord" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OUT',
    "outDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnDate" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DisciplineRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DisciplineRecord" ADD CONSTRAINT "DisciplineRecord_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
