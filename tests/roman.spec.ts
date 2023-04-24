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
	test(`return V for 5`, () => {
		expect(numberToRoman(5)).toBe("V");
	});
	test(`return VI for 6`, () => {
		expect(numberToRoman(6)).toBe("VI");
	});
	test(`return VII for 7`, () => {
		expect(numberToRoman(7)).toBe("VII");
	});
	test(`return VIII for 8`, () => {
		expect(numberToRoman(8)).toBe("VIII");
	});
});
