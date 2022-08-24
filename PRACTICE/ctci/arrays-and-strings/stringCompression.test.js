/*
Implement a method to perform basic string compresssion using the counts of repeated characters. If the compressed string would not become smaller, the method should return the original string. Assume the string has only u[ppercase and lowercase letters (a - z).

BIG O: time O(n) / space O(n)
*/

const compressString = (str) => {
  let finalLength = countCompression(str);
  if (finalLength >= str.length) return str;

  let compressed = new String();
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;

    if (i + 1 > str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressed += str.charAt(i);
      compressed += countConsecutive;
      countConsecutive = 0;
    }
  }
  return compressed;
};

const countCompression = (str) => {
  let compressedLength = 0;
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;

    if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressedLength += 1 + countConsecutive.valueOf().length;
      countConsecutive = 0;
    }
  }
  return compressedLength;
};

describe("compresses a string", () => {
  it("returns the compressed string with correct character counts", () => {
    expect(isPermutation("aabcccccaaa")).toBe("a2b1c5a3");
    expect(isPermutation("hello")).toBe("hello");
    expect(isPermutation("abbbbbbbbbbbb")).toBe("ab12");
  });
});
