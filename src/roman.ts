const NUMBER_TO_ROMAN_MAP: Record<number, string> = {
	1: "I",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
	1000: "M"
};

export const numberToRoman = (n: number): string => {
	const numbers = Object.keys(NUMBER_TO_ROMAN_MAP).map(Number);
	for (const m of numbers.reverse()) {
		if (n >= m) return [NUMBER_TO_ROMAN_MAP[m], numberToRoman(n - m)].join("");
	}
	return "".padEnd(n, "I");
};
