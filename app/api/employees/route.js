import connectMongoDB from "@/libs/mongodb";
import Employee from "@/models/employee";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { ID, name, companyID } = await req.json();
  await connectMongoDB();

  await Employee.create({
    ID,
    name,
    companyID,
  });
  return NextResponse.json({ message: "Employee Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const employees = await Employee.find();
  return NextResponse.json({ employees });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Employee.findByIdAndDelete(id);
  return NextResponse.json({ message: "Employee Deleted" }, { status: 200 });
}
