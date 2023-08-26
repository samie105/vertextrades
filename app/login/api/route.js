import jwt from "jsonwebtoken";
import UserModel from "../../mongodbConnect";
import { NextResponse } from "next/server"; // Import NextResponse

export async function POST(request) {
  const { email, password } = await request.json();

  // Find user
  const user = await UserModel.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 400 });
  }

  // Since you didn't hash the password, we'll do a simple comparison here
  const isPasswordValid = password === user.password;
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Password is incorrect" },
      { status: 400 }
    );
  }

  // Generate JWT
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "3d",
  });

  return NextResponse.json(
    { token, message: "Login successful" },
    { status: 200 }
  );
}
