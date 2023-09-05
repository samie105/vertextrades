import { NextResponse } from "next/server";
import UserModel from "../../../../../mongodbConnect";

export async function POST(request) {
  const { email, transactionId, newStatus } = await request.json();

  try {
    // Use findOneAndUpdate to update the specific field
    const updatedUser = await UserModel.findOneAndUpdate(
      { email, "withdrawalHistory.id": transactionId }, // Find the user and the specific withdrawal record
      {
        $set: {
          "withdrawalHistory.$.transactionStatus": newStatus, // Update the transactionStatus
        },
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
