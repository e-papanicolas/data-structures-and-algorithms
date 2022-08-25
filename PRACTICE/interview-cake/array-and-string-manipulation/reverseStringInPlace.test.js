// Write a function that takes an array of characters and reverses the letters in place.
// Why an array of characters instead of a string?
// The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// BIG O: time O() / space O()

const reverseString = (chars) => {
  let start = 0;
  let end = chars.length - 1;

  while (start < end) {
    let temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;

    start++;
    end--;
  }
};

test("reverses a string represented as an array of characters, in place", () => {
  const input = ["h", "e", "l", "l", "o"];
  reverseString(input);
  expect(input).toStrictEqual(["o", "l", "l", "e", "h"]);
});
