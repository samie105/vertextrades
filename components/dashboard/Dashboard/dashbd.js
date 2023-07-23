export const dashhh = [
  {
    name: "total balance",
    bal: "0.00",
  },
  {
    name: "last profit",
    bal: "0.00",
  },
  {
    name: "total won",
    bal: "0.00",
  },
  {
    name: "total loss",
    bal: "0.00",
  },
  {
    name: "Trades Placed",
    bal: "0.00",
  },
  {
    name: "Trades Placed",
    bal: "0.00",
    howManyLive: "",
  },
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDashhh() {
  dashhh.forEach((item) => {
    if (item.howManyLive !== undefined) {
      item.howManyLive = getRandomNumber(1, 60).toString();
    }
  });
}

setInterval(() => {
  updateDashhh();
}, 1000);
