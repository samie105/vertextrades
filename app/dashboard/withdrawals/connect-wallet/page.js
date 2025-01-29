import WalletConnectForm from "../../../../components/dashboard/withdrawals/withdrawal-form/WalletConnectForm";

export default function WalletConnectPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2 text-gray-500">
        Connect Your Wallet
      </h1>
      <p className="text-gray-600 mb-6">
        Choose your preferred wallet and connect securely to our platform.
      </p>
      <WalletConnectForm />
    </div>
  );
}
