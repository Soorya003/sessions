//sort an array using merge sort

// Merge Sort implementation
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort both halves
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // Helper function to merge two sorted arrays
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Merge the arrays until one of them is exhausted
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate the remaining elements from either left or right
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage
  const arr = [38, 27, 43, 3, 9, 82, 10];
  console.log("Original Array:", arr);
  const sortedArr = mergeSort(arr);
  console.log("Sorted Array:", sortedArr);

  //implement quick sort on an array of integers

  // Quick Sort implementation
function quickSort(arr) {
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Choose a pivot (we use the last element in this case)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    // Partition the array into two sub-arrays: left for elements less than pivot, right for elements greater than pivot
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort the left and right sub-arrays and concatenate the results with the pivot in the middle
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage
  const arr = [38, 27, 43, 3, 9, 82, 10];
  console.log("Original Array:", arr);
  const sortedArr = quickSort(arr);
  console.log("Sorted Array:", sortedArr);
 
  //sort a nearly sorted array where each element is at most k places away from its target position

  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(val) {
      this.heap.push(val);
      this._heapifyUp();
    }
  
    extractMin() {
      if (this.heap.length === 0) return null;
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this._heapifyDown();
      }
      return min;
    }
  
    _heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[index] >= this.heap[parentIndex]) break;
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      }
    }
  
    _heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let swap = null;
  
        if (leftChildIndex < length) {
          if (this.heap[leftChildIndex] < element) swap = leftChildIndex;
        }
        if (rightChildIndex < length) {
          if (
            (swap === null && this.heap[rightChildIndex] < element) ||
            (swap !== null && this.heap[rightChildIndex] < this.heap[leftChildIndex])
          ) {
            swap = rightChildIndex;
          }
        }
  
        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  }
  
  // Function to sort a nearly sorted array
  function sortNearlySortedArray(arr, k) {
    const minHeap = new MinHeap();
    const result = [];
    
    // Step 1: Insert the first k+1 elements into the min-heap
    for (let i = 0; i <= k; i++) {
      minHeap.insert(arr[i]);
    }
  
    // Step 2: For each element after the k+1th element, extract the minimum and insert the next element
    for (let i = k + 1; i < arr.length; i++) {
      result.push(minHeap.extractMin());
      minHeap.insert(arr[i]);
    }
  
    // Step 3: Extract the remaining elements from the min-heap
    while (minHeap.heap.length > 0) {
      result.push(minHeap.extractMin());
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [6, 5, 3, 2, 8, 10, 9];
  const k = 3;
  console.log("Original Array:", arr);
  const sortedArr = sortNearlySortedArray(arr, k);
  console.log("Sorted Array:", sortedArr);

  //perform a bucket sort on an array of decimals

  // Function to perform Insertion Sort on a given array
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      
      // Move elements of arr[0..i-1], that are greater than key, to one position ahead
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  // Function to perform Bucket Sort on an array of decimals
  function bucketSort(arr) {
    // If the array is empty or contains only one element, it's already sorted
    if (arr.length <= 1) return arr;
    
    // Step 1: Create empty buckets
    const n = arr.length;
    const buckets = [];
  
    // Step 2: Put array elements into different buckets
    for (let i = 0; i < n; i++) {
      const index = Math.floor(arr[i] * n);  // Map element to bucket index
      if (!buckets[index]) {
        buckets[index] = [];
      }
      buckets[index].push(arr[i]);
    }
  
    // Step 3: Sort each bucket using Insertion Sort (or any other sorting algorithm)
    for (let i = 0; i < n; i++) {
      if (buckets[i]) {
        insertionSort(buckets[i]);
      }
    }
  
    // Step 4: Concatenate all sorted buckets
    let result = [];
    for (let i = 0; i < n; i++) {
      if (buckets[i]) {
        result = result.concat(buckets[i]);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [0.42, 0.32, 0.24, 0.51, 0.67, 0.13, 0.89];
  console.log("Original Array:", arr);
  const sortedArr = bucketSort(arr);
  console.log("Sorted Array:", sortedArr);

  //sort an array ofintegers by frequency of elements

  // Function to sort an array of integers by frequency of elements
function sortByFrequency(arr) {
    // Step 1: Count the frequency of each element
    const frequencyMap = {};
    for (let num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Step 2: Convert frequency map to an array of [element, frequency] pairs
    const freqArray = [];
    for (let num in frequencyMap) {
      freqArray.push([parseInt(num), frequencyMap[num]]);
    }
  
    // Step 3: Sort the array by frequency (highest frequency first)
    freqArray.sort((a, b) => b[1] - a[1]);
  
    // Step 4: Reconstruct the sorted array
    let result = [];
    for (let [num, freq] of freqArray) {
      for (let i = 0; i < freq; i++) {
        result.push(num);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [4, 4, 2, 6, 7, 4, 2, 2, 7, 7, 6];
  console.log("Original Array:", arr);
  const sortedArr = sortByFrequency(arr);
  console.log("Sorted by Frequency:", sortedArr);

  
  //sort an array of strings lexicographically

  // Function to sort an array of strings lexicographically
function sortStringsLexicographically(arr) {
    return arr.sort(); // Sorts the array in lexicographical (alphabetical) order
  }
  
  // Example usage:
  const arr = ["banana", "apple", "cherry", "date"];
  console.log("Original Array:", arr);
  const sortedArr = sortStringsLexicographically(arr);
  console.log("Sorted Array:", sortedArr);

  //sort an array using heap sort

  // Function to perform Heap Sort on an array
function heapSort(arr) {
    const n = arr.length;
  
    // Step 1: Build a Max-Heap
    // Build the heap in a bottom-up manner
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Step 2: Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Swap the root (maximum value) with the last element
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // Heapify the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // Helper function to maintain the heap property (heapify)
  function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left child
    let right = 2 * i + 2; // right child
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
  
      // Recursively heapify the affected subtree
      heapify(arr, n, largest);
    }
  }
  
  // Example usage:
  const arr = [4, 10, 3, 5, 1];
  console.log("Original Array:", arr);
  const sortedArr = heapSort(arr);
  console.log("Sorted Array:", sortedArr);

  //sort a matrix row wise and column wise

  // Function to sort a matrix row-wise
function sortRowWise(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].sort((a, b) => a - b); // Sort each row in ascending order
    }
    return matrix;
  }
  
  // Function to sort a matrix column-wise
  function sortColumnWise(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    // Extract columns, sort them, and put them back
    for (let col = 0; col < numCols; col++) {
      let column = [];
      
      // Extract the current column
      for (let row = 0; row < numRows; row++) {
        column.push(matrix[row][col]);
      }
  
      // Sort the column
      column.sort((a, b) => a - b);
  
      // Put the sorted column back into the matrix
      for (let row = 0; row < numRows; row++) {
        matrix[row][col] = column[row];
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  let matrix = [
    [10, 2, 5],
    [8, 4, 7],
    [6, 9, 3]
  ];
  
  console.log("Original Matrix:");
  console.table(matrix);
  
  // Sort row-wise
  let rowSortedMatrix = sortRowWise(matrix.map(row => row.slice())); // Create a copy for row sorting
  console.log("Row-wise Sorted Matrix:");
  console.table(rowSortedMatrix);
  
  // Sort column-wise
  let columnSortedMatrix = sortColumnWise(matrix.map(row => row.slice())); // Create a copy for column sorting
  console.log("Column-wise Sorted Matrix:");
  console.table(columnSortedMatrix);

  
  //find the kth smallest element in an array 

  // Function to find the kth smallest element by sorting
function findKthSmallest(arr, k) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    // Return the kth smallest element (index k-1)
    return arr[k - 1];
  }
  
  // Example usage:
  const arr = [12, 3, 5, 7, 19];
  const k = 2;
  console.log(`The ${k}th smallest element is:`, findKthSmallest(arr, k));

  
  //sort an array containing negative and positive numbers with negatives coming first

  // Function to sort an array with negatives coming first
function sortWithNegativesFirst(arr) {
    // Step 1: Separate negative and positive numbers
    const negatives = arr.filter(num => num < 0);  // Extract negative numbers
    const positives = arr.filter(num => num >= 0);  // Extract positive numbers
    
    // Step 2: Sort both arrays
    negatives.sort((a, b) => a - b);  // Sort negative numbers in ascending order
    positives.sort((a, b) => a - b);  // Sort positive numbers in ascending order
    
    // Step 3: Combine the sorted negative and positive arrays
    return [...negatives, ...positives];
  }
  
  // Example usage:
  const arr = [3, -2, 5, -1, 4, -3, 2, 0];
  console.log("Original Array:", arr);
  const sortedArr = sortWithNegativesFirst(arr);
  console.log("Sorted Array with Negatives First:", sortedArr);
  