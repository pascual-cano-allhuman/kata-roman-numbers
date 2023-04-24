export const numberToRoman = (n: number): string => {
	if (n >= 5) return ["V", numberToRoman(n - 5)].join("");
	return "".padStart(n, "I");
};
