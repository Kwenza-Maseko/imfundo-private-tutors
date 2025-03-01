import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/utils/model/User";
import { connectToDB } from "@/utils/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectToDB(); // Ensure DB is connected
    const { email, firstname, lastname } = await req.json(); // Extract email from request body

    if (!email || !firstname || !lastname ) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Already subscribed" }, { status: 409 });
    }

    // Save new User
    const newUser = new User({ firstname, lastname, email });
    await newUser.save();

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 201 });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
