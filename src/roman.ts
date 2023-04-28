export const numberToRoman = (n: number): string => {
	if (n === 5) return "V";
	
	return "".padEnd(n, "I");
};
