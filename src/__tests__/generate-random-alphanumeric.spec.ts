import { benchmark } from "kelonio";
import { alphanumeric } from "../fixtures/alphanumeric-values";
import { generateRandomAlphanumeric } from "../generate-random-alphanumeric";

describe("generate-random-alphanumeric", () => {
  it("should generate random alphanumeric", () => {
    const result = generateRandomAlphanumeric();
    expect(alphanumeric).toContain(result);
  });

  it("generate-random-alphanumeric performance", async () => {
    await benchmark.record(
      "generate-random-alphanumeric",
      () => generateRandomAlphanumeric(),
      { meanUnder: 1 },
    );
  });
});
