import { ALPHANUMERIC, BASE_TEN } from './constants';
import { generateCusipCheckCode } from './generate-cusip-check-code';

const randomFrom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const generateCusip = (): string => {
  let body = '';
  for (let i = 0; i < 6; i++) body += randomFrom(BASE_TEN);
  for (let i = 0; i < 2; i++) body += randomFrom(ALPHANUMERIC);
  return body + generateCusipCheckCode(body);
};
