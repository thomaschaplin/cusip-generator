import { benchmark } from "kelonio";
import { baseTenNumbers } from "../fixtures/base-ten-numbers";
import { generateRandomBaseTenNumber } from "../generate-random-base-ten-number";

describe("generate-random-base-ten-number", () => {
  it("should generate random base ten number", () => {
    const result = generateRandomBaseTenNumber();
    expect(baseTenNumbers).toContain(result)
  });

  it("generate-random-base-ten-number performance", async () => {
    await benchmark.record(
"generate-random-base-ten-number",
      () => generateRandomBaseTenNumber(),
      { meanUnder: 1 },
    );
  });
});

