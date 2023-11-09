import connectMongoDB from "@/libs/mongodb";
import Company from "@/models/company";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { ID, name } = await req.json();
  await connectMongoDB();

  await Company.create({
    ID,
    name,
  });
  return NextResponse.json({ message: "Company Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const companies = await Company.find();
  return NextResponse.json({ companies });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Company.findByIdAndDelete(id);
  return NextResponse.json({ message: "Company Deleted" }, { status: 200 });
}
