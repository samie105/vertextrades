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
          "depositHistory.$.transactionStatus": newStatus,
          isReadNotifications: false,
        },
        ...(newStatus === "success" && {
          $inc: {
            tradingBalance: amount,
            totalDeposited: amount,
          },
          $push: {
            notifications: {
              id: crypto.randomUUID(),
              method: "success",
              type: "transaction",
              message: `Your deposit of $${amount} has been successfully processed and your balance topped up.`,
              date: Date.now(),
            },
          },
        }),
        ...(newStatus === "failed" && {
          $push: {
            notifications: {
              id: crypto.randomUUID(),
              method: "failure",
              type: "transaction",
              message: `Your deposit of $${amount} has failed. Contact customer support for help.`,
              date: Date.now(),
            },
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
