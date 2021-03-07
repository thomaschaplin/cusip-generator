import { benchmark } from "kelonio";
import { convertStringToBaseTenNumber } from "../convert-string-to-base-ten-number";

describe("convert-string-to-base-ten-number", () => {
  it("should convert string to base ten number", () => {
    const result = convertStringToBaseTenNumber("1");
    expect(result).toStrictEqual(1);
  });

  it("convert-string-to-base-ten-number performance", async () => {
    await benchmark.record(
      "convert-string-to-base-ten-number",
      () => convertStringToBaseTenNumber("1"),
      { meanUnder: 1 },
    );
  });
});
