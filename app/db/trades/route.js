import { NextResponse } from "next/server";
import UserModel from "../../../mongodbConnect";

export async function POST(request) {
  const { email, tradeId, newStatus } = await request.json();

  try {
    // Find the user and the specific withdrawal record
    const updateObj = {
      $set: {
        "trades.$.status": newStatus, // Update the transactionStatus
      },
    };

    const updatedUser = await UserModel.findOneAndUpdate(
      { email, "trades.id": tradeId },
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
