import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  const { id } = params;
  const { newName: name } = req.json();

  try {
    const updatedCompany = await prisma.company.update({
      where: {
        ID: parseInt(id),
      },
      data: {
        name,
      },
    });

    return NextResponse.json(
      { message: "Company Updated", company: updatedCompany },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating company:", error);
    return NextResponse.json(
      { message: "Failed to update company" },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const company = await prisma.company.findUnique({
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
