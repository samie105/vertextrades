import { NextResponse } from "next/server";
import UserModel from "../../../../mongodbConnect";

export async function POST(request) {
  const { email, depositMethod, amount, transactionStatus } =
    await request.json();
  const lowerEmail = email.toLowerCase();

  try {
    // Search for the user with the provided email
    const user = await UserModel.findOne({ email: lowerEmail });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" });
    }

    // Generate current date in the desired format
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Add the deposit history to the user's depositHistory array
    console.log({
      dateAdded: currentDate,
      depositMethod,
      amount,
      transactionStatus,
      dep: user.depositHistory,
    });
    user.depositHistory.push({
      dateAdded: currentDate,
      depositMethod,
      amount,
      transactionStatus,
    });

    // Save the changes to the user
    await user.save();

    return NextResponse.json({
      success: true,
      message: user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred: " + error,
    });
  }
}
