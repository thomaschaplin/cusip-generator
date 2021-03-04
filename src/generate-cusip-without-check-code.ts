import { generateRandomStringOfAlphanumericChars } from "./generate-random-string-of-alphanumeric-chars";
import { generateRandomStringOfBaseTenChars } from "./generate-random-string-of-base-ten-chars";

export const makeCusipWithoutCheckCode = (): string => {
  const randomBaseTenString = generateRandomStringOfBaseTenChars();
  const randomAlphanumericString = generateRandomStringOfAlphanumericChars();
  return randomBaseTenString + randomAlphanumericString;
};
