import { NextResponse } from "next/server";
import UserModel from "../../mongodbConnect";

export async function POST(request) {
  const { name, country, email, dob, phone, password } = await request.json(); // Directly destructure from request.body
  // Generate unique withdrawalPin and taxCodePin
  const withdrawalPin = await generateUniquePin();
  const taxCodePin = await generateUniquePin();
  console.log("server");
  const user = new UserModel({
    name,
    country,
    email,
    phone,
    dob,
    password,
    withdrawalPin,
    taxCodePin,
    autoTrades: true,
    isVerified: false,
  });

  try {
    await user.save();
    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

async function generateUniquePin() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let pin;

  do {
    pin = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      pin += characters.charAt(randomIndex);
    }
  } while (await isPinExists(pin));

  return pin;
}

async function isPinExists(pin) {
  // Query the database to see if the pin already exists in either the withdrawalPin or taxCodePin fields
  const userWithWithdrawalPin = await UserModel.findOne({ withdrawalPin: pin }); // Use UserModel
  const userWithTaxCodePin = await UserModel.findOne({ taxCodePin: pin }); // Use UserModel

  // Return true if either query finds a user, false otherwise
  return Boolean(userWithWithdrawalPin || userWithTaxCodePin);
}
