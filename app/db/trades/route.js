import { NextResponse } from "next/server";
import UserModel from "../../../mongodbConnect";

export async function POST(request) {
  const { email, tradeId, newStatus, asset } = await request.json();

  try {
    // Find the user and the specific withdrawal record
    const updateObj = {
      $set: {
        "trades.$.status": newStatus, // Update the transactionStatus
      },
    };
    if (newStatus === "Gain") {
      // If newStatus is "Completed," subtract 'amount' from tradingBalance
      updateObj.$inc = {
        totalWon: +1,
      };
    }
    if (newStatus === "Loss") {
      // If newStatus is "Completed," subtract 'amount' from tradingBalance
      updateObj.$inc = {
        totalLoss: +1,
      };
    }

    if (newStatus === "Gain") {
      updateObj.$push = {
        notifications: {
          id: crypto.randomUUID(),
          method: "trade",
          type: "success",
          message: `${asset} trade hits Gain, Profit has been sent to your balance`,
          date: Date.now(),
        },
      };
    }
    if (newStatus === "Loss") {
      updateObj.$push = {
        notifications: {
          id: crypto.randomUUID(),
          method: "trade",
          type: "failure",
          message: `${asset} trade hits a Loss`,
          date: Date.now(),
        },
      };
    }
    // Set isReadNotifications to false
    updateObj.$set = {
      isReadNotifications: false,
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
