import { NextResponse } from "next/server";
import UserModel from "../../../../../../mongodbConnect";

export async function DELETE(request, { params }) {
  const { id, email } = params;

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { success: false },
        { status: 400 }
      );
    }

    // Find the index of the notification with the given ID in the notifications array
    const notificationIndex = user.notifications.findIndex(
      (notification) => notification.id === id
    );

    if (notificationIndex === -1) {
      return NextResponse.json(
        { message: "Notification not found" },
        { success: false },
        { status: 400 }
      );
    }

    // Use $pull to remove the notification from the notifications array
    user.notifications.pull({ id });
    console.log("deleted the notif");

    // Save the updated user document
    await user.save();

    return new NextResponse.json({ success: true, status: 201 }); // Return a 204 No Content response for success
  } catch (error) {
    console.error("Error deleting notification:", error);
    return new NextResponse.Error("Failed to delete notification");
  }
}
