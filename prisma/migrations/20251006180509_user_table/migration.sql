-- Active: 1747546158046@@127.0.0.1@5432@school
-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePhoto" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
