import { NextResponse } from "next/server";
import UserModel from "../../../../../mongodbConnect";

export async function POST(request) {
  const { email, transactionId, newStatus, amount } = await request.json();

  try {
    // Find the user and the specific withdrawal record
    const updateObj = {
      $set: {
        "withdrawalHistory.$.transactionStatus": newStatus, // Update the transactionStatus
      },
    };

    if (newStatus === "success") {
      // If newStatus is "success," subtract 'amount' from tradingBalance
      updateObj.$inc = {
        tradingBalance: -amount,
        totalWithdrawn: +amount,
      };
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { email, "withdrawalHistory.id": transactionId },
      updateObj,
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
