//implement a circular queue

class CircularQueue {
    constructor(size) {
      this.size = size; // Maximum size of the queue
      this.queue = new Array(size); // Array to store the elements
      this.front = -1; // Front of the queue
      this.rear = -1;  // Rear of the queue
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === -1;
    }
  
    // Check if the queue is full
    isFull() {
      return (this.rear + 1) % this.size === this.front;
    }
  
    // Add an element to the queue
    enqueue(value) {
      if (this.isFull()) {
        console.log('Queue is full');
        return;
      }
      // If the queue is empty, initialize front and rear
      if (this.front === -1) {
        this.front = 0;
      }
      this.rear = (this.rear + 1) % this.size; // Move rear in a circular manner
      this.queue[this.rear] = value;
      console.log(`${value} added to the queue`);
    }
  
    // Remove an element from the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log('Queue is empty');
        return;
      }
      const removedValue = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = this.rear = -1; // Queue becomes empty
      } else {
        this.front = (this.front + 1) % this.size; // Move front in a circular manner
      }
      console.log(`${removedValue} removed from the queue`);
      return removedValue;
    }
  
    // Peek at the front element of the queue
    peek() {
      if (this.isEmpty()) {
        console.log('Queue is empty');
        return;
      }
      console.log(`Front element is: ${this.queue[this.front]}`);
      return this.queue[this.front];
    }
  
    // Display the elements of the queue
    display() {
      if (this.isEmpty()) {
        console.log('Queue is empty');
        return;
      }
      let i = this.front;
      while (i !== this.rear) {
        console.log(this.queue[i]);
        i = (i + 1) % this.size;
      }
      console.log(this.queue[this.rear]);
    }
  }
  
  // Example usage:
  const queue = new CircularQueue(5); // Create a queue of size 5
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  queue.display();
  
  queue.dequeue();
  queue.enqueue(60);
  queue.display();
  
  queue.peek();

  
  //sort a stack using recursion

  class Stack {
    constructor() {
      this.stack = [];
    }
  
    // Push an element to the stack
    push(value) {
      this.stack.push(value);
    }
  
    // Pop an element from the stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.stack.pop();
    }
  
    // Get the top element of the stack
    peek() {
      return this.isEmpty() ? null : this.stack[this.stack.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Function to sort the stack using recursion
    sortStack() {
      if (!this.isEmpty()) {
        // Pop the top element
        let temp = this.pop();
  
        // Sort the rest of the stack
        this.sortStack();
  
        // Insert the popped element back into the sorted stack
        this.insertSorted(temp);
      }
    }
  
    // Function to insert an element in sorted order
    insertSorted(element) {
      // Base case: If the stack is empty or the element is greater than the top element, push it directly
      if (this.isEmpty() || element > this.peek()) {
        this.push(element);
        return;
      }
  
      // Recursive case: Pop the top element and try to insert the current element
      let temp = this.pop();
      this.insertSorted(element);
  
      // Push the popped element back
      this.push(temp);
    }
  
    // Function to print the stack (for visualization)
    printStack() {
      console.log(this.stack);
    }
  }
  
  // Example usage:
  let stack = new Stack();
  stack.push(34);
  stack.push(3);
  stack.push(31);
  stack.push(98);
  stack.push(92);
  stack.push(23);
  
  console.log("Original Stack:");
  stack.printStack();
  
  stack.sortStack();
  
  console.log("Sorted Stack:");
  stack.printStack();

  
  //find the maximum element in a stack in a constant time

  class StackWithMax {
    constructor() {
      this.stack = [];       // Main stack to store elements
      this.maxStack = [];    // Auxiliary stack to store maximum values
    }
  
    // Push an element onto the stack
    push(value) {
      // Push the value onto the main stack
      this.stack.push(value);
  
      // Push the maximum value onto the max stack
      if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.push(value);
      } else {
        // Otherwise, repeat the current maximum value in the max stack
        this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
      }
    }
  
    // Pop an element from the stack
    pop() {
      if (this.stack.length === 0) {
        return null; // Stack is empty
      }
  
      // Pop from both the main stack and the max stack
      this.maxStack.pop();
      return this.stack.pop();
    }
  
    // Get the maximum element in the stack in constant time
    getMax() {
      if (this.maxStack.length === 0) {
        return null; // Stack is empty
      }
      return this.maxStack[this.maxStack.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Print the stack (for visualization)
    printStack() {
      console.log(this.stack);
    }
  }
  
  // Example usage:
  let stack = new StackWithMax();
  stack.push(34);
  stack.push(3);
  stack.push(31);
  stack.push(98);
  stack.push(92);
  stack.push(23);
  
  console.log("Maximum Element:", stack.getMax()); // Should print 98
  
  stack.pop();
  console.log("Maximum Element after pop:", stack.getMax()); // Should print 98
  
  stack.pop();
  console.log("Maximum Element after another pop:", stack.getMax()); // Should print 98
  
  stack.pop();
  console.log("Maximum Element after another pop:", stack.getMax()); // Should print 34

  
  //design a data structure supporting min,max,push and pop in constant time

  class MinMaxStack {
    constructor() {
      this.stack = [];     // Main stack to store the elements
      this.minStack = [];  // Stack to store the minimum values
      this.maxStack = [];  // Stack to store the maximum values
    }
  
    // Push an element onto the stack
    push(value) {
      this.stack.push(value);
  
      // Push the minimum value onto the min stack
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      } else {
        // Repeat the current minimum value in the min stack
        this.minStack.push(this.minStack[this.minStack.length - 1]);
      }
  
      // Push the maximum value onto the max stack
      if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.push(value);
      } else {
        // Repeat the current maximum value in the max stack
        this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
      }
    }
  
    // Pop an element from the stack
    pop() {
      if (this.stack.length === 0) {
        return null;  // Stack is empty
      }
  
      // Pop from all three stacks (main, min, max)
      this.minStack.pop();
      this.maxStack.pop();
      return this.stack.pop();
    }
  
    // Get the minimum element in the stack in constant time
    getMin() {
      if (this.minStack.length === 0) {
        return null;  // Stack is empty
      }
      return this.minStack[this.minStack.length - 1];
    }
  
    // Get the maximum element in the stack in constant time
    getMax() {
      if (this.maxStack.length === 0) {
        return null;  // Stack is empty
      }
      return this.maxStack[this.maxStack.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Print the stack (for visualization)
    printStack() {
      console.log(this.stack);
    }
  }
  
  // Example usage:
  let stack = new MinMaxStack();
  stack.push(34);
  stack.push(3);
  stack.push(31);
  stack.push(98);
  stack.push(92);
  stack.push(23);
  
  console.log("Minimum Element:", stack.getMin()); // Should print 3
  console.log("Maximum Element:", stack.getMax()); // Should print 98
  
  stack.pop();
  console.log("Minimum Element after pop:", stack.getMin()); // Should print 3
  console.log("Maximum Element after pop:", stack.getMax()); // Should print 98
  
  stack.pop();
  console.log("Minimum Element after another pop:", stack.getMin()); // Should print 3
  console.log("Maximum Element after another pop:", stack.getMax()); // Should print 92

  //reverse the first k elements of a queue

  class Queue {
    constructor() {
      this.queue = [];
    }
  
    // Enqueue operation (add to the end of the queue)
    enqueue(value) {
      this.queue.push(value);
    }
  
    // Dequeue operation (remove from the front of the queue)
    dequeue() {
      if (this.isEmpty()) {
        return null; // If the queue is empty
      }
      return this.queue.shift();
    }
  
    // Peek at the front element of the queue
    peek() {
      return this.isEmpty() ? null : this.queue[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Function to reverse the first k elements of the queue
    reverseFirstK(k) {
      if (k <= 0 || k > this.queue.length) {
        console.log("Invalid value of k");
        return;
      }
  
      // Step 1: Use a stack to store the first k elements
      let stack = [];
      for (let i = 0; i < k; i++) {
        stack.push(this.dequeue());
      }
  
      // Step 2: Re-enqueue the elements from the stack (reversed order)
      while (stack.length > 0) {
        this.enqueue(stack.pop());
      }
  
      // Step 3: Move the remaining elements (k to end) back to the queue
      let size = this.queue.length;
      for (let i = 0; i < size - k; i++) {
        this.enqueue(this.dequeue());
      }
    }
  
    // Print the current queue (for visualization)
    printQueue() {
      console.log(this.queue);
    }
  }
  
  // Example usage:
  let q = new Queue();
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  q.enqueue(40);
  q.enqueue(50);
  
  console.log("Original Queue:");
  q.printQueue();
  
  // Reverse the first 3 elements
  q.reverseFirstK(3);
  
  console.log("Queue after reversing the first 3 elements:");
  q.printQueue();

  
  //implement a priority queue

  class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    // Enqueue operation (add to the priority queue)
    enqueue(value, priority) {
      const element = { value, priority };
      
      // Insert the element in sorted order by priority (ascending order)
      if (this.queue.length === 0) {
        this.queue.push(element);
      } else {
        let added = false;
        for (let i = 0; i < this.queue.length; i++) {
          if (element.priority < this.queue[i].priority) {
            this.queue.splice(i, 0, element); // Insert at the correct position
            added = true;
            break;
          }
        }
        if (!added) {
          this.queue.push(element); // If the element has the lowest priority, push to the end
        }
      }
    }
  
    // Dequeue operation (remove and return the highest priority element)
    dequeue() {
      if (this.isEmpty()) {
        return null; // If the queue is empty
      }
      return this.queue.shift(); // Remove the first element (highest priority)
    }
  
    // Peek operation (view the highest priority element)
    peek() {
      if (this.isEmpty()) {
        return null; // If the queue is empty
      }
      return this.queue[0]; // Return the first element (highest priority)
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Print the queue (for visualization)
    printQueue() {
      console.log(this.queue);
    }
  }
  
  // Example usage:
  let pq = new PriorityQueue();
  pq.enqueue('Task 1', 2); // Task 1 has priority 2
  pq.enqueue('Task 2', 1); // Task 2 has priority 1
  pq.enqueue('Task 3', 3); // Task 3 has priority 3
  
  console.log("Priority Queue:");
  pq.printQueue(); // Queue should be sorted by priority (1, 2, 3)
  
  console.log("Peek:", pq.peek()); // Should print the element with the highest priority (Task 2)
  
  console.log("Dequeue:");
  console.log(pq.dequeue()); // Should dequeue Task 2 (highest priority)
  
  console.log("Priority Queue after dequeue:");
  pq.printQueue(); // Should print Task 1 and Task 3
  
  console.log("Dequeue:");
  console.log(pq.dequeue()); // Should dequeue Task 1
  
  console.log("Priority Queue after another dequeue:");
  pq.printQueue(); // Should print Task 3
  
  console.log("Dequeue:");
  console.log(pq.dequeue()); // Should dequeue Task 3 (last item)

  
  //find the minimum element in a stack

  class StackWithMin {
    constructor() {
      this.stack = [];     // Main stack to store the elements
      this.minStack = [];  // Auxiliary stack to store the minimum values
    }
  
    // Push an element onto the stack
    push(value) {
      this.stack.push(value);
  
      // Push the minimum value onto the min stack
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      } else {
        // Repeat the current minimum value in the min stack
        this.minStack.push(this.minStack[this.minStack.length - 1]);
      }
    }
  
    // Pop an element from the stack
    pop() {
      if (this.isEmpty()) {
        return null; // Stack is empty
      }
  
      // Pop from both the main stack and the min stack
      this.minStack.pop();
      return this.stack.pop();
    }
  
    // Get the minimum element in the stack in constant time
    getMin() {
      if (this.minStack.length === 0) {
        return null; // Stack is empty
      }
      return this.minStack[this.minStack.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Print the stack (for visualization)
    printStack() {
      console.log(this.stack);
    }
  }
  
  // Example usage:
  let stack = new StackWithMin();
  stack.push(34);
  stack.push(3);
  stack.push(31);
  stack.push(98);
  stack.push(92);
  stack.push(23);
  
  console.log("Stack:");
  stack.printStack(); // Output: [34, 3, 31, 98, 92, 23]
  
  console.log("Minimum Element:", stack.getMin()); // Output: 3
  
  stack.pop();
  console.log("Stack after pop:");
  stack.printStack(); // Output: [34, 3, 31, 98, 92]
  
  console.log("Minimum Element after pop:", stack.getMin()); // Output: 3
  
  stack.pop();
  console.log("Stack after another pop:");
  stack.printStack(); // Output: [34, 3, 31, 98]
  
  console.log("Minimum Element after another pop:", stack.getMin()); // Output: 3

  //check if a string can be reduced to an empty string by recursive removal of adjacent duplicates

  function canBeReducedToEmpty(str) {
    // Helper function to remove adjacent duplicates in a string
    function removeAdjacentDuplicates(s) {
      let stack = [];
      
      for (let i = 0; i < s.length; i++) {
        // If the stack is not empty and the top element is the same as the current one, pop it (remove adjacent duplicate)
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
      }
      
      // Return the string formed by the characters remaining in the stack
      return stack.join('');
    }
  
    // Recursively remove adjacent duplicates until no more can be removed
    let newStr = removeAdjacentDuplicates(str);
    if (newStr === str) {
      return newStr.length === 0;  // If no change happened, check if the string is empty
    } else {
      return canBeReducedToEmpty(newStr);  // Recur with the new string
    }
  }
  
  // Example usage:
  console.log(canBeReducedToEmpty("aabccba")); // true (can be reduced to an empty string)
  console.log(canBeReducedToEmpty("abbaca"));  // true (can be reduced to an empty string)
  console.log(canBeReducedToEmpty("abcd"));    // false (no adjacent duplicates to remove)

  //design a system that supports efficient insertion and retrieval of most recent elements

  class RecentElementsSystem {
    constructor(maxSize) {
      this.stack = [];  // Stack to store elements
      this.maxSize = maxSize;  // Maximum size of the stack
    }
  
    // Insert an element into the stack
    push(value) {
      if (this.stack.length >= this.maxSize) {
        console.log("Stack is full. Cannot insert new elements.");
        return;
      }
      this.stack.push(value);
      console.log(`Inserted: ${value}`);
    }
  
    // Retrieve the most recent element (top element)
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty.");
        return null;
      }
      return this.stack[this.stack.length - 1];  // Return the top element
    }
  
    // Remove the most recent element (top element)
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty. Nothing to pop.");
        return null;
      }
      return this.stack.pop();  // Remove and return the top element
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Print the current state of the stack (for visualization)
    printStack() {
      console.log("Current Stack:", this.stack);
    }
  }
  
  // Example usage:
  let recentSystem = new RecentElementsSystem(5);  // Maximum 5 elements
  
  recentSystem.push(10);
  recentSystem.push(20);
  recentSystem.push(30);
  recentSystem.push(40);
  recentSystem.push(50);
  recentSystem.push(60);  // Will not be inserted, because maxSize is 5
  
  console.log("Most Recent Element:", recentSystem.peek());  // Output: 50
  
  recentSystem.printStack();  // Output: [10, 20, 30, 40, 50]
  
  recentSystem.pop();
  console.log("After Pop, Most Recent Element:", recentSystem.peek());  // Output: 40
  
  recentSystem.printStack();  // Output: [10, 20, 30, 40]
  