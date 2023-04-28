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
	return NUMBER_TO_ROMAN_MAP[n] || "".padEnd(n, "I");
};
