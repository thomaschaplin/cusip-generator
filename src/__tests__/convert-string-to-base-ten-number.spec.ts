import { benchmark } from "kelonio";
import { convertStringToNumberToBaseTen } from "../convert-string-to-base-ten-number";

describe("convertStringToNumberToBaseTen", () => {
  it("should convert string into base ten number", () => {
    const result = convertStringToNumberToBaseTen("1");
    expect(result).toStrictEqual(1);
  });

  it("performance", async () => {
    await benchmark.record(
      [
        "convertStringToNumberToBaseTen",
        "should convert string into base ten number",
      ],
      () => convertStringToNumberToBaseTen("1"),
      { meanUnder: 1 },
    );
  });
});
