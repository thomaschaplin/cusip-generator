import { benchmark } from "kelonio";
import { generateCusipWithoutCheckCode } from "../generate-cusip-without-check-code";

describe("generate-cusip-without-check-code", () => {
  it("should generate cusip without check code", () => {
    const result = generateCusipWithoutCheckCode()
    expect(result).toHaveLength(8);
  });

  it("generate-cusip-without-check-code performance", async () => {
    await benchmark.record(
"generate-cusip-without-check-code",
      () => generateCusipWithoutCheckCode(),
      { meanUnder: 1 },
    );
  });
});

