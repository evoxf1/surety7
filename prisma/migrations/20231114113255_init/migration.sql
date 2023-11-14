-- CreateTable
CREATE TABLE "Company" (
    "ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Employee" (
    "ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyID" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
