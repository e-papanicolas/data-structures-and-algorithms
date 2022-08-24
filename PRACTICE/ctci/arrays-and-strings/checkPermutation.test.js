/*
Given two strings, write a method to decide if one is a permutation of the other.

BIG O: time O(n) / space O(n)
*/

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let letters = {};

  for (let i = 0; i < str1.length; i++) {
    let curr = str1.charAt(i);
    if (letters[curr]) letters[curr]++;
    else letters[curr] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let curr = str2.charAt(i);
    if (letters[curr]) letters[curr]--;
    else return false;

    if (letters[str2.charAt(i)] < 0) return false;
  }

  return true;
};

describe("detects if one string is a permutation of the other", () => {
  it("returns true when one is a permutation of the other", () => {
    expect(isPermutation("abba", "aabb")).toBe(true);
    expect(isPermutation("olleh", "hello")).toBe(true);
    expect(isPermutation("aaabcd", "abacad")).toBe(true);
  });
  it("returns false when one is not a permutation of the other", () => {
    expect(isPermutation("abba", "aaba")).toBe(false);
    expect(isPermutation("hello", "hllo")).toBe(false);
    expect(isPermutation("a", "ababbb")).toBe(false);
  });
});
