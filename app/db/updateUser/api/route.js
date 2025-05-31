import { NextResponse } from "next/server";
import UserModel from "../../../../mongodbConnect";
import nodemailer from "nodemailer";
import crypto from "crypto";

const sendVerificationEmail = async (name, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Zensyncmarket@gmail.com",
      pass: "xenh ndsb mmpc xpah",
    },
  });

  const mailOptions = {
    from: "LinQ Chain <support@linqchainx.com>",
    to: email,
    subject: "ID Approved",
    html: `
      <p>Dear ${name},</p>
      <p>We are pleased to inform you that your KYC has been approved and your account is now verified. You can now enjoy full access to our platform and its features.</p>
      <p>Best regards,</p>
      <p>LinQ Chain Team</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export async function POST(request) {
  const {
    name,
    email,
    phone,
    password,
    withdrawalPin,
    taxCodePin,
    autoTrades,
    isVerified,
    tradingBalance,
    totalDeposited,
    totalWithdrawn,
    totalAssets,
    totalWon,
    totalLoss,
    lastProfit,
    investmentPackage,
    planBonus,
    tradingProgress,
  } = await request.json();

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.error("User not found", { status: 404 });
    }

    const previousIsVerified = user.isVerified;

    const updateData = {
      name,
      phone,
      password,
      withdrawalPin,
      taxCodePin,
      autoTrades,
      isVerified,
      tradingBalance,
      totalDeposited,
      totalWithdrawn,
      totalAssets,
      totalWon,
      totalLoss,
      investmentPackage,
      lastProfit,
      planBonus,
      tradingProgress,
    };

    const updatedUser = await UserModel.findOneAndUpdate(
      { email },
      updateData,
      {
        new: true,
      }
    );

    if (!previousIsVerified && isVerified) {
      await sendVerificationEmail(name, email);

      const notification = {
        id: crypto.randomUUID(),
        method: "success",
        type: "verification",
        message: `Congratulations!! Your KYC has now been approved.`,
        date: Date.now(),
      };

      const updateNotification = {
        $push: { notifications: notification },
        $set: { isReadNotifications: false },
      };

      await UserModel.updateOne({ email }, updateNotification);
    }

    return NextResponse.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
