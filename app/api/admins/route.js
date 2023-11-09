import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, name, password } = await req.json();
  await connectMongoDB();

  await User.create({
    User,
    name,
    password,
  });
  return NextResponse.json({ message: "Employee Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const users = await User.find();
  return NextResponse.json({ users });
}
