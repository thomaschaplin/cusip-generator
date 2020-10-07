const alphanumeric = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const getRandomBaseTenNumber = () => Math.floor(Math.random() * 10);

const getRandomAlphanumeric = () =>
  alphanumeric[Math.floor(Math.random() * alphanumeric.length)];

const makeCusipWithoutCheckCode = () => {
  let cusip = "";
  for (let i = 0; i < 6; i++) {
    cusip = cusip + getRandomBaseTenNumber();
  }
  for (let i = 0; i < 2; i++) {
    cusip = cusip + getRandomAlphanumeric();
  }
  return cusip;
};

const convertNumberToBaseTen = (value) => parseInt(value, 10);

const isOdd = (value) => value % 2 === 1;

const calculateCheckCode = (cusip) => {
  let currentValue;
  let total = 0;
  let check;

  for (let i = 0; i < cusip.length; i++) {
    currentValue = cusip[i];

    const currentNumberToBaseTen = convertNumberToBaseTen(currentValue);

    let currentNumberOrPosition = isNaN(currentNumberToBaseTen)
      ? currentValue.charCodeAt(0) - "A".charCodeAt(0) + 10
      : currentValue;

    if (isOdd(i)) {
      currentNumberOrPosition = currentNumberOrPosition * 2;
    }

    total = total + Math.floor(currentNumberOrPosition / 10) +
      (currentNumberOrPosition % 10);
  }
  check = (10 - (total % 10)) % 10;
  return check;
};

const generateCusip = () => {
  const cusip = makeCusipWithoutCheckCode();
  const check = calculateCheckCode(cusip);

  return cusip + check;
};

console.log(generateCusip());

/**
 * Position 1–2: Product Code (e.g., single-family mortgage, ARM, Balloon, etc.)
 * Position 3: Type of Mortgage (Ginnie Mae, Fannie Mae, Freddie Mac)
 * Position 4–6: Coupon
 * Position 7: Maturity
 * Position 8: Settlement Month
 * Position 9: Check Digit
 */
