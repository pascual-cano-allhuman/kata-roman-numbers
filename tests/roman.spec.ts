import { numberToRoman } from "../src/roman";

describe("Roman numbers tests", () => {
	test(`return I for 1`, () => {
		expect(numberToRoman(1)).toBe("I");
	});
	test(`return II for 2`, () => {
		expect(numberToRoman(2)).toBe("II");
	});
	test(`return III for 3`, () => {
		expect(numberToRoman(3)).toBe("III");
	});
});
