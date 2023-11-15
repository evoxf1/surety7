// prisma.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

  async function createCompanyWithEmployees() {
  const employees = [{ name: "" }, { name: "" }];

  const company = await prisma.company.create({
    data: {
      name: "",
      employees: {
        create: employees,
      },
    },
    include: {
      employees: true,
    },
  });

  console.log("Company with employees:", company);
}

// Close the Prisma Client connection when done (if needed)
prisma.$disconnect();

// Call your function
createCompanyWithEmployees();
