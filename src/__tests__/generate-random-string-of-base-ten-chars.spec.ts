import { benchmark } from "kelonio";
import { generateRandomStringOfBaseTenChars } from "../generate-random-string-of-base-ten-chars";

describe("generate-random-string-of-base-ten-chars", () => {
  it("should generate a random string of base ten chars", () => {
    const result = generateRandomStringOfBaseTenChars();
    expect(result).toHaveLength(6);
  });

  it("generate-random-string-of-base-ten-chars performance", async () => {
    await benchmark.record(
"generate-random-string-of-base-ten-chars.spec",
      () => generateRandomStringOfBaseTenChars(),
      { meanUnder: 1 },
    );
  });
});

