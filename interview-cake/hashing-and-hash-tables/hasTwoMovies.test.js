// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// Constraints:
// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// BIG O: time O(n) / space O(n)

const canTwoMoviesFillFlight = (flightLength, movieLengths) => {
  let seen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const current = movieLengths[i];

    const diff = flightLength - current;
    if (seen.has(diff)) return true;

    seen.add(current);
  }

  return false;
};

test("returns true if there are two numbers in movieLengths whose sum equals flightLength", () => {
  expect(canTwoMoviesFillFlight(10, [5, 5, 3, 2, 1])).toBe(true);
  expect(canTwoMoviesFillFlight(6, [2, 2, 3, 1, 3])).toBe(true);
});
test("returns false if there are no numbers in movieLengths whose sum equals flightLength", () => {
  expect(canTwoMoviesFillFlight(10, [5, 4, 3, 2, 1])).toBe(false);
  expect(canTwoMoviesFillFlight(8, [1, 2, 3, 4])).toBe(false);
});
