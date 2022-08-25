// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
// BIG O: time O(n) / space O(n)

const mergeArrays = (arr1, arr2) => {
  let result = [];
  let idx1 = 0;
  let idx2 = 0;
  let idxResult = 0;

  while (idxResult < arr1.length + arr2.length) {
    const isArr1Empty = idx1 >= arr1.length;
    const isArr2Empty = idx2 >= arr2.length;

    if (!isArr1Empty && (isArr2Empty || arr1[idx1] < arr2[idx2])) {
      result[idxResult] = arr1[idx1];
      idx1++;
    } else {
      result[idxResult] = arr2[idx2];
      idx2++;
    }
    idxResult++;
  }

  return result;
};

test("it returns a single sorted array", () => {
  const myArray = [3, 4, 6, 10, 11, 15];
  const otherArray = [1, 5, 8, 12, 14, 19];
  expect(mergeArrays(myArray, otherArray)).toStrictEqual([
    1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19,
  ]);
});
