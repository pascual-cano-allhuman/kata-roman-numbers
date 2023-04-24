import { numberToRoman } from "../src/roman";

describe("Roman numbers tests", () => {
  test(`return I for 1`, () => {
    expect(numberToRoman(1)).toBe("I");
  });
});
