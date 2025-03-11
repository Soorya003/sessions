//1.find the floor and ceiling of a target in a sorted array

function findFloorAndCeiling(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;
    let ceiling = -1;
  
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
  
      if (arr[mid] === target) {
        floor = arr[mid];
        ceiling = arr[mid];
        break;
      }
  
      if (arr[mid] < target) {
        floor = arr[mid];
        start = mid + 1;
      } else {
        ceiling = arr[mid];
        end = mid - 1;
      }
    }
  
    return { floor, ceiling };
  }
  
  // Example usage:
  const array = [1, 3, 5, 7, 9];
  const target = 6;
  const result = findFloorAndCeiling(array, target);
  console.log(result); // Output: { floor: 5, ceiling: 7 }

//2.find the smallest missing element in a sorted array


function findSmallestMissingElement(arr) {
  // If the array is empty, the smallest missing element is 0
  if (arr.length === 0) {
    return 0;
  }

  // Iterate through the sorted array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not equal to i + arr[0], it means a number is missing
    if (arr[i] !== i + arr[0]) {
      return i + arr[0];
    }
  }

  // If all elements are in sequence, the missing element is the next number after the last element
  return arr.length + arr[0];
}

// Example usage:
console.log(findSmallestMissingElement([0, 1, 2, 3, 4]));  // Output: 5
console.log(findSmallestMissingElement([1, 2, 3, 4]));     // Output: 0
console.log(findSmallestMissingElement([1, 2, 3, 5]));     // Output: 4
console.log(findSmallestMissingElement([0, 1, 2, 5, 6]));  // Output: 3
console.log(findSmallestMissingElement([0, 2, 3, 4, 5]));  // Output: 1

//3.perform ternary search on a sorted array
  
function ternarySearch(arr, left, right, target) {
  if (right >= left) {
    // Divide the array into 3 parts
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    // If the target is at mid1 or mid2, return the index
    if (arr[mid1] === target) {
      return mid1;
    }
    if (arr[mid2] === target) {
      return mid2;
    }

    // If target is smaller than mid1, search the left part
    if (target < arr[mid1]) {
      return ternarySearch(arr, left, mid1 - 1, target);
    }
    // If target is greater than mid2, search the right part
    else if (target > arr[mid2]) {
      return ternarySearch(arr, mid2 + 1, right, target);
    }
    // If target is between mid1 and mid2, search the middle part
    else {
      return ternarySearch(arr, mid1 + 1, mid2 - 1, target);
    }
  }

  // If the element is not found, return -1
  return -1;
}

// Wrapper function to start ternary search
function search(arr, target) {
  return ternarySearch(arr, 0, arr.length - 1, target);
}

// Example usage:
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
let target = 17;

let result = search(arr, target);
console.log(result); // Output: 8 (index of the element 17 in the array)

target = 8;
result = search(arr, target);
console.log(result); // Output: -1 (element 8 is not in the array)

//4.find the index of a target in an infinite array

function findTargetInInfiniteArray(arr, target) {
  // Step 1: Exponential search to find the range
  let low = 0;
  let high = 1;

  // Increase high until arr[high] >= target or we go out of bounds
  while (arr[high] < target) {
    low = high;
    high = 2 * high;  // Double the high index
  }

  // Step 2: Perform binary search within the range [low, high]
  return binarySearch(arr, low, high, target);
}

// Binary search to find the target in the range [low, high]
function binarySearch(arr, low, high, target) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;  // Target found
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;  // Target not found
}

// Example usage:
const arr = [1, 2, 3, 5, 6, 7, 8, 10, 12, 14, 15, 17, 19, 20, 25];
const target = 14;
const result = findTargetInInfiniteArray(arr, target);

console.log(result);  // Output: 9 (index of 14)

//5.find the minimum element in a rotated sorted array

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If the middle element is greater than the rightmost element,
    // then the minimum is in the right half.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Otherwise, the minimum is in the left half (including mid).
      right = mid;
    }
  }

  // When the loop ends, left == right, and pointing to the minimum element.
  return nums[left];
}

// Example usage:
const arr1 = [3, 4, 5, 1, 2];
const arr2 = [4, 5, 6, 7, 0, 1, 2];
const arr3 = [11, 13, 15, 17];

console.log(findMin(arr1));  // Output: 1
console.log(findMin(arr2));  // Output: 0
console.log(findMin(arr3));  // Output: 11

//6.count the frequency of elements using binary search

function binarySearch(arr, target, findFirst) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;  // Record the result (first or last occurrence)
      if (findFirst) {
        right = mid - 1;  // Move to the left to find the first occurrence
      } else {
        left = mid + 1;   // Move to the right to find the last occurrence
      }
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

function countFrequency(arr, target) {
  // Find the first occurrence of the target
  let firstIndex = binarySearch(arr, target, true);
  if (firstIndex === -1) {
    return 0;  // If target is not found, frequency is 0
  }

  // Find the last occurrence of the target
  let lastIndex = binarySearch(arr, target, false);

  // Frequency is the difference between the indices plus 1
  return lastIndex - firstIndex + 1;
}

// Example usage:
const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5];
const target = 5;

console.log(countFrequency(arr, target));  // Output: 4 (because 5 appears 4 times)

const target2 = 2;
console.log(countFrequency(arr, target2)); // Output: 3 (because 2 appears 3 times)

const target3 = 6;
console.log(countFrequency(arr, target3)); // Output: 0 (because 6 is not in the array)

//7.find the closest element to a target in a sorted array

function findClosestElement(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  // Edge case: if the array is empty
  if (arr.length === 0) {
    return -1;  // or any other error handling
  }

  // If the target is out of the range of the array, return the closest element
  if (target <= arr[left]) {
    return arr[left];
  }
  if (target >= arr[right]) {
    return arr[right];
  }

  // Binary search for the closest element
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return arr[mid];  // Exact match
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // After binary search, left and right will point to the closest values around the target
  let closest = arr[left];
  if (left > 0 && Math.abs(arr[left - 1] - target) < Math.abs(closest - target)) {
    closest = arr[left - 1];
  }

  return closest;
}

// Example usage:
const arr1 = [1, 3, 8, 10, 15];
const target1 = 12;
console.log(findClosestElement(arr1, target1));  // Output: 10

const arr2 = [1, 3, 8, 10, 15];
const target2 = 5;
console.log(findClosestElement(arr2, target2));  // Output: 3

const arr3 = [1, 3, 8, 10, 15];
const target3 = 0;
console.log(findClosestElement(arr3, target3));  // Output: 1

const arr4 = [1, 3, 8, 10, 15];
const target4 = 20;
console.log(findClosestElement(arr4, target4));  // Output: 15

//8.implement an exponential search

// Binary search helper function
function binarySearch(arr, left, right, target) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;  // Element found
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;  // Element not found
}

// Exponential search function
function exponentialSearch(arr, target) {
  if (arr[0] === target) {
    return 0;  // If the first element is the target, return 0
  }

  // Step 1: Find the range where the target might be
  let i = 1;
  while (i < arr.length && arr[i] < target) {
    i *= 2;  // Double the index (1, 2, 4, 8, 16, ...)
  }

  // Step 2: Perform binary search within the identified range
  return binarySearch(arr, Math.floor(i / 2), Math.min(i, arr.length - 1), target);
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
const target = 15;

const result = exponentialSearch(arr, target);
console.log(result);  // Output: 7 (index of the element 15)

//9.find the peak index in a bitonic array

function findPeakIndex(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if mid is the peak element
    if ((mid === 0 || arr[mid] > arr[mid - 1]) && (mid === arr.length - 1 || arr[mid] > arr[mid + 1])) {
      return mid;  // Peak found
    }

    // If the middle element is smaller than the next element, peak must be in the right half
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      // If the middle element is smaller than the previous element, peak must be in the left half
      right = mid - 1;
    }
  }

  return -1;  // Return -1 if no peak is found (this case should not happen in a valid bitonic array)
}

// Example usage:
const bitonicArray1 = [1, 3, 8, 12, 4, 2];
const bitonicArray2 = [1, 2, 3, 4, 5, 3, 1];
const bitonicArray3 = [3, 8, 3, 1];

console.log(findPeakIndex(bitonicArray1));  // Output: 3 (index of peak element 12)
console.log(findPeakIndex(bitonicArray2));  // Output: 4 (index of peak element 5)
console.log(findPeakIndex(bitonicArray3));  // Output: 1 (index of peak element 8)
