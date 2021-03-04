import { convertStringToNumberToBaseTen } from "./convert-string-to-base-ten-number";
import { isOdd } from "./is-odd";

export const calculateCheckCode = (cusip: string): number => {
  const cusipLength = cusip.length;
  let currentValue;
  let total = 0;
  let check: number;

  for (let i = 0; i < cusipLength; i++) {
    currentValue = cusip[i];

    const currentNumberToBaseTen = convertStringToNumberToBaseTen(currentValue);

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
