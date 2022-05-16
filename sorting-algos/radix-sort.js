// - Sorted with no actual comparisons
// - Special algo only for numbers
// - Can use on binary - so also strings and images converted to binary
// - Exploits the fact that information about the size of a number is encoded in the numbers of digits… aka more digits bigger number
// - Creates a bucket for each set of numbers that end in that number

function getDigit(num, place) {
  // returns the digit in num at the given place value
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  // given an array of numbers, returns the number of digits in the largest numbers in the list

  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  // figure out how many digits the largest number has
  // loop from k=0 until the number ^ of digits of the largest number
  // for each iteration:
  // create buckets for each digit (0-9) AKA arrays
  // place each number in the corresponding bucket based on its kth digit (zero-indexed from the right not left, index k digit)
  // replace our existing array with values in our buckets, starting with 0 and going up to 9

  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
