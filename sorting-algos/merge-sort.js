function merge(arr1, arr2) {
  // create an empty array, take a look at smallest values in each input array
  // 2 counters - I and J, use while loops starting at 0
  // while I and J haven’t hit the end of array,
  // if value in first array is smaller than the value the second array, push the value in the first array into our results and move on to the next value in the first array
  // if value in the first array is larger than the value in the second array, push the value in the second array into results and move on
  // once we exhaust one array, push in all remaining values from the other array

  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  // break up the array into halves until you have arrays that are 0 or 1 element, using recursion, until base case is hit, using slice
  // once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back to full array
  // return merged array

  if (arr.length <= 1) return arr; // base case

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
