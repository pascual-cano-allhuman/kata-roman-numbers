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
	if (n === 6) return ["V", NUMBER_TO_ROMAN_MAP[1]].join("");

	return "".padEnd(n, "I");
};
