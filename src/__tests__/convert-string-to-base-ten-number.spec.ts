import { convertStringToNumberToBaseTen } from "../convert-string-to-base-ten-number";

describe("convertStringToNumberToBaseTen", () => {
  it("should convert string into base ten number", () => {
    const result = convertStringToNumberToBaseTen("1");
    expect(result).toStrictEqual(1);
  });
});
