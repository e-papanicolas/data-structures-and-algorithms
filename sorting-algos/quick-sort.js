// in place - no new array
// is responsible for arranging elements in an array on either side of a pivot
// function should designate an element as the pivot (should ideally be the median value in the data)
// rearrange all elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot 	are moved to the right of the pivot
// return the index of the pivot

function pivot(arr, start = 0, end = arr.length + 1) {
  // ** should never start with first element - try and do random or middle

  // accept 3 args - array, start index, and end index - can default to 0 and the array length -1
  // grab the pivot from the start of the array
  // store the current pivot index in a variable to keep track of where pivot should end up
  // loop through the array from start to end
  // if the pivot is greater than the current element, increment the pivot index variable and then sway the current element with the element at 		the pivot index
  // swap the starting element (pivot) with the pivot index and return pivot index

  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // call the pivot helper on the array
  // when the helper returns to you the updated pivot index, recursively call the pivot helper on the sub array to the left of that index, and the 		subarray to the right of that index
  // your base case occurs when you consider a subarray with less than 2 elements

  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex - 1, right);
  }
  return arr;
}
