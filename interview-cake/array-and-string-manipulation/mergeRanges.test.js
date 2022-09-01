// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
// BIG O: time O(n logn) / space O(n)

const mergeRanges = (meetings) => {
  const copy = JSON.parse(JSON.stringify(meetings));

  let sorted = copy.sort((a, b) => a.startTime - b.startTime);
  let result = [sorted[0]];

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    const temp = result[result.length - 1];

    if (current.startTime <= temp.endTime) {
      temp.endTime = Math.max(temp.endTime, current.endTime);
    } else {
      result.push(current);
    }
  }
  return result;
};

test("merges an array of multiple meeting times into condensed ranges", () => {
  expect(
    mergeRanges([
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 5 },
      { startTime: 4, endTime: 8 },
      { startTime: 10, endTime: 12 },
      { startTime: 9, endTime: 10 },
    ])
  ).toStrictEqual([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 },
  ]);
});
