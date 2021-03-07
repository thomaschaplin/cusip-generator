import { benchmark } from "kelonio";
import { generateCusipCheckCode } from "../generate-cusip-check-code";

describe("generate-cusip-check-code", () => {
  it("should generate cusip check code", () => {
    const result = generateCusipCheckCode("327492T3");
    expect(result).toEqual(8);
  });

  it("generate-cusip-check-code performance", async () => {
    await benchmark.record(
"generate-cusip-check-code",
      () => generateCusipCheckCode("327492T3"),
      { meanUnder: 1 },
    );
  });
});

