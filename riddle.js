const mantras = [
  "Less code is better",
  "Don't repeat yourself (DRY)",
  "Duplication is far cheaper than the wrong abstraction",
  "Declare variables, not war",
  "No! Try not! Do or do not, there is no try.",
];

const generateRandomDelay = () => Math.floor(Math.random() * 5000);

const generateRandomIndex = (length) =>
  Math.floor(Math.random() * (length - 1));

const generateBoolean = () => Math.floor(Math.random() * 10) > 2;

const getRiddle = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (generateBoolean()) {
        resolve(mantras[generateRandomIndex(mantras.length)]);
      } else {
        reject("I don't really feel like doing this...");
      }
    }, generateRandomDelay());
  });
