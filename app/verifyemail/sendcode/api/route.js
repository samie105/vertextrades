import { NextResponse } from "next/server";
import UserModel from "../../../mongodbConnect";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email } = await request.json();
  const verificationCode = generateVerificationCode();
  const codeExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now

  try {
    await UserModel.updateOne({ email }, { verificationCode, codeExpiry });
    await sendVerificationEmail(email, verificationCode);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function generateVerificationCode() {
  return Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
}

async function sendVerificationEmail(email, code) {
  let transporter = nodemailer.createTransport({
    // Transport configuration
    service: "gmail",
    auth: {
      user: "osr.cty@gmail.com",
      pass: "btzbcklyxerxvkiy",
    },
  });

  await transporter.sendMail({
    from: '"Your App" <no-reply@yourwebsite.com>',
    to: email,
    subject: "Email Verification",
    text: `Your verification code is: ${code}`,
    html: `<p>Your verification code is: <strong>${code}</strong></p>`,
  });
}
