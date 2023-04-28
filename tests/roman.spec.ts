import { numberToRoman } from "../src/roman";

describe("Roman numbers tests", () => {
	test(`converting 1 into I`, () => {
		const actual = numberToRoman(1);
		expect(actual).toBe("I");
	});

	test(`converting 2 into II`, () => {
		const actual = numberToRoman(2);
		expect(actual).toBe("II");
	});

	test(`converting 3 into III`, () => {
		const actual = numberToRoman(3);
		expect(actual).toBe("III");
	});
});
