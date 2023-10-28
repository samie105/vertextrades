export const stakingOptions = [
  {
    id: "btc_stake_1",
    name: "Bitcoin Staking",
    coinName: "Bitcoin",
    coinSymbol: "BTC",
    description: "Stake your Bitcoin and earn rewards.",
    minimum: 0.1, // Minimum staking amount in BTC
    maximum: 10, // Maximum staking amount in BTC
    cycle: "Monthly", // Staking cycle (e.g., Daily, Monthly)
    durations: [
      { months: 1, percentage: 5 }, // 5% monthly reward for 1 month
      { months: 3, percentage: 15 }, // 15% monthly reward for 3 months
      { months: 6, percentage: 25 }, // 25% monthly reward for 6 months
    ],
    imagePath: "/assets/markets/crypto/BTC.svg",
  },
  {
    id: "eth_stake_1",
    name: "Ethereum Staking",
    coinName: "Ethereum",
    coinSymbol: "ETH",
    description: "Stake your Ethereum and earn rewards.",
    minimum: 0.5, // Minimum staking amount in ETH
    maximum: 50, // Maximum staking amount in ETH
    cycle: "Monthly",
    durations: [
      { months: 1, percentage: 4.5 },
      { months: 3, percentage: 14 },
      { months: 6, percentage: 24 },
      { months: 12, percentage: 40 }, // 40% monthly reward for 12 months
    ],
    imagePath: "/assets/markets/crypto/ETH.svg",
  },
  {
    id: "ada_stake_1",
    name: "Cardano Staking",
    coinName: "Cardano",
    coinSymbol: "ADA",
    description: "Stake your Cardano ADA and earn rewards.",
    minimum: 1000, // Minimum staking amount in ADA
    maximum: 10000, // Maximum staking amount in ADA
    cycle: "Quarterly", // Staking cycle (e.g., Quarterly)
    durations: [
      { months: 3, percentage: 10 }, // 10% quarterly reward for 3 months
      { months: 9, percentage: 30 }, // 30% quarterly reward for 9 months
    ],
    imagePath: "/assets/markets/crypto/ADA.svg",
  },
];
