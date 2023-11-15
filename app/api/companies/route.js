import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const { ID, name } = await req.json();

  try {
    const newCompany = await prisma.company.create({
      data: {
        ID,
        name,
      },
    });

    return NextResponse.json(
      { message: "Company Created", company: newCompany },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating company:", error);
    return NextResponse.json(
      { message: "Failed to create company" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const companies = await prisma.company.findMany();

    return NextResponse.json({ companies }, { status: 200 });
  } catch (error) {
    console.error("Error fetching companies:", error);
    return NextResponse.json(
      { message: "Failed to fetch companies" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const company = await prisma.company.delete({
      where: {
        ID: parseInt(id),
      },
    });

    return NextResponse.json({ company }, { status: 200 });
  } catch (error) {
    console.error("Error fetching company:", error);
    return NextResponse.json(
      { message: "Failed to fetch company" },
      { status: 500 }
    );
  }
}
