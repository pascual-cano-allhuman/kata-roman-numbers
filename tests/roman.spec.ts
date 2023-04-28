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

	test(`converting 6 into VI`, () => {
		const actual = numberToRoman(6);
		expect(actual).toBe("VI");
	});

	test(`converting 7 into VII`, () => {
		const actual = numberToRoman(7);
		expect(actual).toBe("VII");
	});

	test(`converting 8 into VIII`, () => {
		const actual = numberToRoman(8);
		expect(actual).toBe("VIII");
	});

	test(`converting 10 into X`, () => {
		const actual = numberToRoman(10);
		expect(actual).toBe("X");
	});

	test(`converting 11 into XI`, () => {
		const actual = numberToRoman(11);
		expect(actual).toBe("XI");
	});

	test(`converting 12 into XII`, () => {
		const actual = numberToRoman(12);
		expect(actual).toBe("XII");
	});

	test(`converting 16 into XVI`, () => {
		const actual = numberToRoman(16);
		expect(actual).toBe("XVI");
	});

	test(`converting 21 into XXI`, () => {
		const actual = numberToRoman(21);
		expect(actual).toBe("XXI");
	});

	test(`converting 50 into L`, () => {
		const actual = numberToRoman(50);
		expect(actual).toBe("L");
	});

	test(`converting 51 into LI`, () => {
		const actual = numberToRoman(51);
		expect(actual).toBe("LI");
	});

	test(`converting 100 into C`, () => {
		const actual = numberToRoman(100);
		expect(actual).toBe("C");
	});

	test(`converting 101 into C`, () => {
		const actual = numberToRoman(101);
		expect(actual).toBe("CI");
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
