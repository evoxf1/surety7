import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const { ID, name, companyID } = req.body;

  try {
    const createdEmployee = await prisma.employee.create({
      data: { ID, name, companyID },
    });
    return NextResponse.json(
      { message: "Employee Created", createdEmployee },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json(
      { message: "Failed to create employee" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const employees = await prisma.employee.findMany();
    return NextResponse.json({ employees }, { status: 200 });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json(
      { message: "Failed to fetch employees" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    await prisma.employee.delete({ where: { ID: parseInt(id, 10) } });
    return NextResponse.json({ message: "Employee Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return NextResponse.json(
      { message: "Failed to delete employee" },
      { status: 500 }
    );
  }
}
