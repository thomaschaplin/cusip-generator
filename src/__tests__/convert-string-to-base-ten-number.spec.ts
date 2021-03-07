import { benchmark } from "kelonio";
import { convertStingToBaseTenNumber } from "../convert-string-to-base-ten-number";

describe("convert-string-to-base-ten-number", () => {
  it("should convert string to base ten number", () => {
    const result = convertStingToBaseTenNumber("1");
    expect(result).toStrictEqual(1);
  });

  it("convert-string-to-base-ten-number performance", async () => {
    await benchmark.record("convert-string-to-base-ten-number",
      () => convertStingToBaseTenNumber("1"),
      { meanUnder: 1 },
    );
  });
});
