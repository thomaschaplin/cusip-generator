import { benchmark } from "kelonio";
import { generateCusip } from "../generate-cusip";

describe("generate-cusip", () => {
  it("should generate a cusip", () => {
    const result = generateCusip();
    expect(result).toHaveLength(9);
  });

  it("generate-cusip performance", async () => {
    await benchmark.record(
      "generate-cusip",
      () => generateCusip(),
      { meanUnder: 1 },
    );
  });
});
