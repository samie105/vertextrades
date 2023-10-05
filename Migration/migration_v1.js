const UserModel = require("../mongodbConnect");

// Define the migration logic
const runMigration = async () => {
  try {
    // Find all documents in the 'users' collection
    const users = await UserModel.find();

    // Update each user document according to the new schema
    for (const user of users) {
      user.notifications = [
        {
          id: 5,
          method: "intro",
          type: "neutral",
          message: "Welcome to capital nexus",
          date: new Date(),
        },
      ];
      user.isReadNotifications = false;
      user.isCopyTrading = false;
      user.isLinkSeedPhrase = false;
      user.isPaidTransactionFee = false;
      user.isBanned = false;
      await user.save();
    }

    console.log("Migration completed successfully");
  } catch (error) {
    console.error("Error during migration:", error);
  }
};
runMigration();
