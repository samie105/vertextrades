import { NextResponse } from "next/server";
import UserModel from "../../../mongodbConnect"; // Make sure to import your UserModel

export async function POST(request) {
  const { email, code } = await request.json();
  const user = await UserModel.findOne({ email });
  console.log("Received email:", email);
  console.log("Received code:", code);
  console.log("User from DB:", user);
  console.log("Code from DB:", user.verificationCode);
  console.log("Code from request:", code);
  console.log("Are they equal?", user.verificationCode === code);
  console.log("Current time:", Date.now());
  console.log("Code expiry:", user.codeExpiry);
  if (user && user.verificationCode === code && user.codeExpiry > Date.now()) {
    await UserModel.updateOne({ _id: user._id }, { emailVerified: true });
    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    return NextResponse.json(
      { success: false, message: "Invalid or expired verification code" },
      { status: 400 }
    );
  }
}
