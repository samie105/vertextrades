import { NextResponse } from "next/server";
import UserModel from "../../../mongodbConnect";

export async function POST(request) {
  const { email } = await request.json();
  const lowerEmail = email.toLowerCase();

  const detail = await UserModel.findOne({ email: lowerEmail });
  console.log(detail);
  return NextResponse.json(detail);
}
