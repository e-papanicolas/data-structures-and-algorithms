// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.
// Why an array of characters instead of a string?
// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.
// BIG O: time O(n) / space O(1)

const reverseWords = (words) => {
  reverseChars(words, 0, words.length - 1);

  let currentStart = 0;

  for (let i = 0; i <= words.length; i++) {
    if (i === words.length || words[i] === " ") {
      reverseChars(words, currentStart, i - 1);
      currentStart = i + 1;
    }
  }
};

const reverseChars = (chars, start, end) => {
  while (start < end) {
    let temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;

    start++;
    end--;
  }
};

test("it reverses the order of the words in place", () => {
  const input = [
    "c",
    "a",
    "k",
    "e",
    " ",
    "p",
    "o",
    "u",
    "n",
    "d",
    " ",
    "s",
    "t",
    "e",
    "a",
    "l",
  ];
  reverseWords(input);
  expect(input).toStrictEqual([
    "s",
    "t",
    "e",
    "a",
    "l",
    " ",
    "p",
    "o",
    "u",
    "n",
    "d",
    " ",
    "c",
    "a",
    "k",
    "e",
  ]);
});
