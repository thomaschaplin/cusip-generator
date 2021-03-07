import { benchmark } from "kelonio";
import { isOdd } from "../is-odd";

describe("is-odd", () => {
  it("should return true when odd number is used", () => {
    const result = isOdd(1);
    expect(result).toBeTruthy();
  });

  it("should return false when even number is used", () => {
    const result = isOdd(2);
    expect(result).toBeFalsy();
  });

  it("is-odd performance", async () => {
    await benchmark.record(
      "is-odd",
      () => isOdd(1),
      { meanUnder: 1 },
    );
  });
});
