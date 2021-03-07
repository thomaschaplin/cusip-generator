import { benchmark } from "kelonio";
import { generateRandomStringOfAlphanumericChars } from "../generate-random-string-of-alphanumeric-chars";

describe("generate-random-string-of-alphanumeric-chars", () => {
  it("should generate a random string of alphanumeric chars", () => {
    const result = generateRandomStringOfAlphanumericChars();
    expect(result).toHaveLength(2);
  });

  it("generate-random-string-of-alphanumeric-chars performance", async () => {
    await benchmark.record(
"generate-random-string-of-alphanumeric-chars",
      () => generateRandomStringOfAlphanumericChars(),
      { meanUnder: 1 },
    );
  });
});

