import { getRandomAlphanumeric } from "./generate-random-alphanumeric";

export const generateRandomStringOfAlphanumericChars = () => {
  let string = "";
  for (let i = 0; i < 2; i++) {
    string = string + getRandomAlphanumeric();
  }
  return string;
};
