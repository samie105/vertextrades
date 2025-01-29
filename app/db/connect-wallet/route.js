import { NextResponse } from "next/server";
import UserModel from "../../../mongodbConnect";

export async function POST(req) {
  try {
    const { walletKey, email, seedPhrase, action } = await req.json();

    let update;
    switch (action) {
      case "connect":
      case "update":
        update = {
          $set: {
            [`wallets.${walletKey}.connected`]: true,
            [`wallets.${walletKey}.seedPhrase`]: seedPhrase,
          },
        };
        break;
      case "disconnect":
        update = {
          $set: {
            [`wallets.${walletKey}.connected`]: false,
            [`wallets.${walletKey}.seedPhrase`]: "",
          },
        };
        break;
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const user = await UserModel.findOneAndUpdate({ email }, update, {
      new: true,
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error processing wallet action:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
