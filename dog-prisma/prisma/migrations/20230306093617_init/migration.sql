-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,
    "breed" VARCHAR(255),
    "ownerrId" TEXT NOT NULL,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Toy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Toy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DogToToy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_DogToToy_AB_unique" ON "_DogToToy"("A", "B");

-- CreateIndex
CREATE INDEX "_DogToToy_B_index" ON "_DogToToy"("B");

-- AddForeignKey
ALTER TABLE "Dog" ADD CONSTRAINT "Dog_ownerrId_fkey" FOREIGN KEY ("ownerrId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DogToToy" ADD CONSTRAINT "_DogToToy_A_fkey" FOREIGN KEY ("A") REFERENCES "Dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DogToToy" ADD CONSTRAINT "_DogToToy_B_fkey" FOREIGN KEY ("B") REFERENCES "Toy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
