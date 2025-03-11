//find the number of occurences of an element in an array

const array = [1, 2, 3, 1, 2, 1, 4, 1];
const targetElement = 1;

const countOccurrences = (arr, val) =>
  arr.reduce((accumulator, currentValue) =>
    (currentValue === val ? accumulator + 1 : accumulator), 0);

const count = countOccurrences(array, targetElement);
console.log(count); // Output: 4

//merge two sorted arrays

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
  
    // Traverse both arrays and insert the smaller element into mergedArray
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // If there are remaining elements in arr1, append them
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // If there are remaining elements in arr2, append them
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const array1 = [1, 3, 5, 7, 9];
  const array2 = [2, 4, 6, 8, 10];
  const result = mergeSortedArrays(array1, array2);
  console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  

  //reverse the elements in an array

  function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  const array = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(array);
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
  console.log(array); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
  

  //search for an element in a sorted array

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const currentElement = arr[middle];
  
      if (currentElement === target) {
        return middle; // Target found, return its index
      } else if (currentElement < target) {
        left = middle + 1; // Discard the left half
      } else {
        right = middle - 1; // Discard the right half
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const sortedArray = [1, 2, 3, 4, 5];
  const targetValue = 3;
  const result = binarySearch(sortedArray, targetValue);
  
  if (result !== -1) {
    console.log(`Element found at index ${result}`);
  } else {
    console.log('Element not found');
  }

  //find the cumulative sum of an array

  function cumulativeSum(arr) {
    let sum = 0;
    return arr.map(value => sum += value);
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5];
  const result = cumulativeSum(array);
  console.log(result); // Output: [1, 3, 6, 10, 15]

  //calculate the product of all elements in an array

  const array = [1, 2, 3, 4, 5];

const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product); // Output: 120

//check if an array is a palindrome

function isPalindrome(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      if (arr[start] !== arr[end]) {
        return false; // Elements don't match, not a palindrome
      }
      start++;
      end--;
    }
  
    return true; // All elements matched, it's a palindrome
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 2, 1];
  const array2 = [1, 2, 3, 4, 5];
  
  console.log(isPalindrome(array1)); // Output: true
  console.log(isPalindrome(array2)); // Output: false
  
//find the intersection of two arrays

function intersection(arr1, arr2) {
    return arr1.filter(element => arr2.indexOf(element) !== -1);
  }
  
  // Example usage:
  const array1 = [1, 2, 2, 3, 4];
  const array2 = [2, 3, 3, 5];
  const result = intersection(array1, array2);
  console.log(result); // Output: [2, 3]
  
