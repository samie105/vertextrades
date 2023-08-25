import { NextResponse } from "next/server";
import UserModel from "../../mongodbConnect";

export async function POST(request) {
  const { email } = await request.json();

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ exists: true }, { status: 200 });
    } else {
      return NextResponse.json({ exists: false }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
