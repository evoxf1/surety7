import connectMongoDB from "@/libs/mongodb";
import Employee from "@/models/employee";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;

  const { newID: ID, newName: name, newCompanyID: companyID } = req.json();

  await connectMongoDB();
  await Employee.findByIdAndUpdate(id, { ID, name, companyID });
  return NextResponse.json({ message: "UPDATED" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();

  const employee = await Employee.findOne({ _id: id });
  return NextResponse.json({ employee }, { status: 200 });
}
