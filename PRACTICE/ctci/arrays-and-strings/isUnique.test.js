/*
Implement an algorithm to detect if a string has all unique characters.
What if you cannot use additional data structures.

BIG O: time O(n) / space O(1)
*/

const isUnique = (str) => {
  if (str.length > 128) return false;

  let charSet = new Array(128);

  for (let i = 0; i < str.length; i++) {
    let val = str.charAt(i);
    if (charSet[val]) return false;
    charSet[val] = true;
  }

  return true;
};

describe("detects if a string has all unique characters", () => {
  test("returns true when all characters are unique", () => {
    expect(isUnique("abcdefg")).toBe(true);
    expect(isUnique("visual")).toBe(true);
    expect(isUnique("studio")).toBe(true);
  });
  test("returns false when there are repeated characters", () => {
    expect(isUnique("hello")).toBe(false);
    expect(isUnique("javascript")).toBe(false);
  });
});
