import { calculateCheckCode } from "./generate-cusip-check-code";
import { makeCusipWithoutCheckCode } from "./generate-cusip-without-check-code";

export const generateCusip = (): string => {
  const cusip = makeCusipWithoutCheckCode();
  const check = calculateCheckCode(cusip);

  return cusip + check;
};
