import { NextResponse } from "next/server";
import UserModel from "../../../../../mongodbConnect";

export async function POST(request) {
  const { email, transactionId, newStatus, amount } = await request.json();

  try {
    // Find the user and the specific withdrawal record
    const updatedUser = await UserModel.findOneAndUpdate(
      { email, "depositHistory.id": transactionId },
      {
        $set: {
          "depositHistory.$.transactionStatus": newStatus, // Update the transactionStatus
        },
        ...(newStatus === "success" && {
          $inc: {
            tradingBalance: amount, // Increment tradingBalance by 'amount'
            totalDeposited: amount, // Increment totalDeposited by 'amount'
          },
        }),
      },
      {
        new: true, // Return the updated document
      }
    );

    if (!updatedUser) {
      return new NextResponse({
        status: 404,
        body: "User or withdrawal record not found",
      });
    }

    return new NextResponse({
      status: 200,
      body: "Transaction status updated successfully",
    });
  } catch (error) {
    console.error("Error while updating transaction status:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
