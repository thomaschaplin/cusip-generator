import { ALPHANUMERIC, BASE_TEN } from './constants';
import { generateCusipCheckCode } from './generate-cusip-check-code';

const randomFrom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const generateCusip = (): string => {
  const body =
    '' +
    randomFrom(BASE_TEN) + randomFrom(BASE_TEN) + randomFrom(BASE_TEN) +
    randomFrom(BASE_TEN) + randomFrom(BASE_TEN) + randomFrom(BASE_TEN) +
    randomFrom(ALPHANUMERIC) + randomFrom(ALPHANUMERIC);
  return body + generateCusipCheckCode(body);
};
