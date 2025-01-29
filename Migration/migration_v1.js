const UserModel = require("../mongodbConnectMigration");

// Define the migration logic
const runMigration = async () => {
  try {
    console.log("Starting migration: Adding wallets field to all users");

    // Define the default wallets object
    const defaultWallets = {
      MetaMask: { connected: false, seedPhrase: "" },
      CoinbaseWallet: { connected: false, seedPhrase: "" },
      TrustWallet: { connected: false, seedPhrase: "" },
      Rainbow: { connected: false, seedPhrase: "" },
      Phantom: { connected: false, seedPhrase: "" },
      CryptoCom: { connected: false, seedPhrase: "" },
    };

    // Update all documents in the collection
    const updateResult = await UserModel.updateMany(
      { wallets: { $exists: true } }, // Only update documents that don't have the wallets field
      { $set: { wallets: defaultWallets } }
    );

    console.log("Migration completed successfully");
    console.log(`${updateResult.modifiedCount} documents updated`);
    console.log(`${updateResult.matchedCount} documents matched the query`);
  } catch (error) {
    console.error("Error during migration:", error);
  }
};

// Run the migration
runMigration();
