## Roman numbers

-   **I**: The easiest way to note down a number is to make that many marks - little I's. Thus I means 1, II means 2, III means 3. However, four strokes seemed like too many....
-   **V**: So the Romans moved on to the symbol for 5 - V. Placing I in front of the V — or placing any smaller number in front of any larger number — indicates subtraction. So IV means 4. After V comes a series of additions - VI means 6, VII means 7, VIII means 8.
-   **X**: X means 10. But wait — what about 9? Same deal. IX means to subtract I from X, leaving 9. Numbers in the teens, twenties and thirties follow the same form as the first set, only with X's indicating the number of tens. So XXXI is 31, and XXIV is 24.
-   **L**: L means 50. Based on what you've learned, I bet you can figure out what 40 is. If you guessed XL, you're right = 10 subtracted from 50. And thus 60, 70, and 80 are LX, LXX and LXXX.
-   **C**: C stands for centum, the Latin word for 100. A centurion led 100 men. We still use this in words like "century" and "cent." The subtraction rule means 90 is written as XC. Like the X's and L's, the C's are tacked on to the beginning of numbers to indicate how many hundreds there are: CCCLXIX is 369.

More details in the [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals).

## Requirements

Write a function transforming numbers 1 to 1000 into roman numbers (string)

## Tips

-   Some javascript primitives such as [padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) can be useful
-   Following the natural numbers order for incremental tests is a good way to make TDD _baby steps_ in this kata, but not always. The case of `5 ~ V` is simpler than the case of `4 ~ IV`
