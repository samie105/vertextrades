import { NextResponse } from "next/server";
import UserModel from "../../../../mongodbConnect";
import nodemailer from "nodemailer";
import crypto from "crypto";

const sendVerificationEmail = async (name, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Zensyncmarket@gmail.com",
      pass: "vfoo xklv exdp feub",
    },
  });

  const mailOptions = {
    from: "Zensync Market <support@zensyncmarket.com>",
    to: email,
    subject: "ID Approved",
    html: `
      <p>Dear ${name},</p>
      <p>We are pleased to inform you that your ID has been approved. You can now enjoy full access to our platform and its features.</p>
      <p>If you have any questions or need further assistance, please do not hesitate to contact our support team.</p>
      <p>Best regards,</p>
      <p>Zensync Market Team</p>
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

    const user = await UserModel.findOneAndUpdate({ email }, updateData, {
      new: true,
    });

    if (!user) {
      return NextResponse.error("User not found", { status: 404 });
    }

    const previousIsVerified = user.isVerified;
    console.log(true, previousIsVerified, isVerified);

    if (!previousIsVerified && isVerified) {
      await sendVerificationEmail(name, email);

      const notification = {
        id: crypto.randomUUID(),
        method: "success",
        type: "verification",
        message: `Congratulations!! Your verification ID has now been approved.`,
        date: Date.now(),
      };

      user.notifications.push(notification);
      user.isReadNotifications = false;
      await user.save();
    }

    return NextResponse.json({ message: "User updated successfully", user });
  } catch (error) {
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
