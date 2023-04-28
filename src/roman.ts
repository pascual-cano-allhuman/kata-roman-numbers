const NUMBER_TO_ROMAN_MAP: Record<any, string> = {
	1: "I",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
	1000: "M"
};

export const numberToRoman = (n: number): string => {
	const roman = NUMBER_TO_ROMAN_MAP[n];
	if (roman) return roman;
	if (n > 10) return ["X", numberToRoman(n - 10)].join("");
	if (n > 5) return ["V", numberToRoman(n - 5)].join("");


	return "".padEnd(n, "I");
};
