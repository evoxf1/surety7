import connectMongoDB from "@/libs/mongodb";
import Company from "@/models/company";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;

  const { newID: ID, newName: name } = req.json();

  await connectMongoDB();
  await Company.findByIdAndUpdate(id, { ID, name });
  return NextResponse.json({ message: "UPDATED" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();

  const company = await Company.findOne({ _id: id });
  return NextResponse.json({ company }, { status: 200 });
}
