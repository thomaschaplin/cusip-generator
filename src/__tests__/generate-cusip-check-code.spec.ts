import { benchmark } from "kelonio";
import { generateCusipCheckCode } from "../generate-cusip-check-code";

describe("generate-cusip-check-code", () => {
  it("should generate cusip check code", () => {
    const result = generateCusipCheckCode("327492T3");
    expect(result).toEqual(8);
  });

  it("should correctly sum digit-split values (catches arithmetic operator mutations)", () => {
    // "037831AG" has sum(v_i % 10) = 26, which is not divisible by 5 or 10.
    // This distinguishes + from -, and % 10 from * 10, in the accumulator expression.
    const result = generateCusipCheckCode("037831AG");
    expect(result).toEqual(9);
  });

  it("generate-cusip-check-code performance", async () => {
    await benchmark.record(
      "generate-cusip-check-code",
      () => generateCusipCheckCode("327492T3"),
      { meanUnder: 1 },
    );
  });
});
