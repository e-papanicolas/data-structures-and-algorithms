// Write a function that checks whether any permutation of an input string is a palindrome.
// You can assume the input string only contains lowercase letters.
// BIG O: time O(n) / space O(1) -> consider that there are a fixed number of characters in the english language

// either 2 of each letter for even length, or 2 of each w 1 extra for odd length

const isPermutationPalindrome = (str) => {
  let chars = new Set();

  for (let char of str) {
    if (chars.has(char)) chars.delete(char);
    else chars.add(char);
  }

  return chars.size <= 1;
};

test("it returns true if any permutation of the string is a palindrome", () => {
  expect(isPermutationPalindrome("ivicc")).toBe(true);
  expect(isPermutationPalindrome("civic")).toBe(true);
});
test("it returns false if no permutations of the string is are a palindrome", () => {
  expect(isPermutationPalindrome("civil")).toBe(false);
  expect(isPermutationPalindrome("livci")).toBe(false);
});
