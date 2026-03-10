import { benchmark } from "kelonio";
import { generateCusip } from "../generate-cusip";

describe("generate-cusip", () => {
  it("should generate a cusip", () => {
    const result = generateCusip();
    expect(result).toHaveLength(9);
  });

  it("should select characters using multiplication (catches / vs * mutation)", () => {
    // With Math.random() fixed at 0.9:
    //   BASE_TEN[floor(0.9 * 10)]  = BASE_TEN[9]          = 9  → six '9's
    //   ALPHANUMERIC[floor(0.9 * 34)] = ALPHANUMERIC[30]  = 6  → two '6's
    // The / mutant always returns index 0, giving "000000AA7".
    jest.spyOn(Math, 'random').mockReturnValue(0.9);
    try {
      expect(generateCusip()).toBe('999999667');
    } finally {
      jest.restoreAllMocks();
    }
  });

  it("generate-cusip performance", async () => {
    await benchmark.record(
      "generate-cusip",
      () => generateCusip(),
      { meanUnder: 1 },
    );
  });
});
