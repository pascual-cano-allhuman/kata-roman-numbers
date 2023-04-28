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

	test(`converting 5 into V`, () => {
		const actual = numberToRoman(5);
		expect(actual).toBe("V");
	});

	test(`converting 10 into X`, () => {
		const actual = numberToRoman(10);
		expect(actual).toBe("X");
	});

	test(`converting 50 into L`, () => {
		const actual = numberToRoman(50);
		expect(actual).toBe("L");
	});

	test(`converting 100 into C`, () => {
		const actual = numberToRoman(100);
		expect(actual).toBe("C");
	});

	test(`converting 500 into D`, () => {
		const actual = numberToRoman(500);
		expect(actual).toBe("D");
	});

	test(`converting 1000 into M`, () => {
		const actual = numberToRoman(1000);
		expect(actual).toBe("M");
	});
});
