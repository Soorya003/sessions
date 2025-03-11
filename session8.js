//1.reverse a linked list recursively

function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function reverseLinkedList(head) {
    // Base case: If the list is empty or only one node, return the head
    if (head === null || head.next === null) {
      return head;
    }
  
    // Recursive case: reverse the rest of the list
    let reversedList = reverseLinkedList(head.next);
  
    // Reverse the current node's pointer
    head.next.next = head;
    head.next = null;  // Set the current node's next to null to prevent a cycle
  
    return reversedList;  // Return the new head of the reversed list
  }

  // Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }
  
  // Helper function to print the linked list
  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
  
  // Example usage
  const list = createLinkedList([1, 2, 3, 4, 5]);
  console.log("Original Linked List:");
  printLinkedList(list);
  
  const reversedList = reverseLinkedList(list);
  console.log("Reversed Linked List:");
  printLinkedList(reversedList);

  //2.check if a linked list is a palindrome

  function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function isPalindrome(head) {
    // Edge case: if the list is empty or has only one node
    if (head === null || head.next === null) {
      return true;
    }
  
    // Step 1: Use the slow and fast pointer approach to find the middle of the list
    let slow = head;
    let fast = head;
  
    // Move slow pointer one step and fast pointer two steps
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let current = slow;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
  
    // Step 3: Compare the first half with the reversed second half
    let firstHalf = head;
    let secondHalf = prev; // `prev` is now the head of the reversed second half
  
    while (secondHalf !== null) {
      if (firstHalf.value !== secondHalf.value) {
        return false; // Not a palindrome
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    return true; // It is a palindrome
  }

  // Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }
  
  // Helper function to print the linked list
  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }

  // Example usage:
const list1 = createLinkedList([1, 2, 3, 2, 1]);
console.log(isPalindrome(list1));  // Output: true

const list2 = createLinkedList([1, 2, 3, 4, 5]);
console.log(isPalindrome(list2));  // Output: false

//3.remove the nth node from the end of a linked list

function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function removeNthFromEnd(head, n) {
    // Create a dummy node to handle edge cases (like removing the first node)
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
  
    // Move the first pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
      first = first.next;
    }
  
    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
      first = first.next;
      second = second.next;
    }
  
    // Remove the n-th node from the end
    second.next = second.next.next;
  
    return dummy.next; // Return the new head (in case the head was removed)
  }

  // Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }
  
  // Helper function to print the linked list
  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }

  // Example usage
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original Linked List:");
printLinkedList(list);

const updatedList = removeNthFromEnd(list, 2); // Remove the 2nd node from the end
console.log("Updated Linked List:");
printLinkedList(updatedList);

//4.find the intersection point of two linked lists

function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function getIntersectionNode(headA, headB) {
    // Edge case: If either list is empty, there is no intersection
    if (!headA || !headB) {
      return null;
    }
  
    // Step 1: Calculate the lengths of both lists
    let lenA = 0;
    let lenB = 0;
    let currentA = headA;
    let currentB = headB;
  
    while (currentA !== null) {
      lenA++;
      currentA = currentA.next;
    }
  
    while (currentB !== null) {
      lenB++;
      currentB = currentB.next;
    }
  
    // Step 2: Align the starting points
    currentA = headA;
    currentB = headB;
  
    // Move the pointer of the longer list ahead by the difference in lengths
    if (lenA > lenB) {
      for (let i = 0; i < lenA - lenB; i++) {
        currentA = currentA.next;
      }
    } else if (lenB > lenA) {
      for (let i = 0; i < lenB - lenA; i++) {
        currentB = currentB.next;
      }
    }
  
    // Step 3: Traverse both lists simultaneously
    while (currentA !== null && currentB !== null) {
      if (currentA === currentB) {
        return currentA;  // Intersection found
      }
      currentA = currentA.next;
      currentB = currentB.next;
    }
  
    return null; // No intersection
  }

  // Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }
  
  // Helper function to print the linked list
  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }

  // Example: Create two linked lists that intersect
const listA = createLinkedList([1, 2, 3, 4, 5]);
const listB = createLinkedList([6, 7]);

// Manually connecting the intersection point
listB.next.next = listA.next.next.next;  // Intersection at node with value 4

const intersectionNode = getIntersectionNode(listA, listB);
if (intersectionNode) {
  console.log("Intersection at node with value:", intersectionNode.value);  // Output: 4
} else {
  console.log("No intersection");
}

//5.flatten a multilevel doubly linked list

function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
    this.child = null;  // Points to the child list (if any)
  }

  function flatten(head) {
    if (!head) return null;
  
    let current = head;
  
    while (current !== null) {
      // If the current node has a child, we need to flatten the child list
      if (current.child !== null) {
        // Store the next node (to resume the traversal after flattening the child)
        let nextNode = current.next;
  
        // Flatten the child list
        let childHead = flatten(current.child);
  
        // Link the current node to the child list
        current.next = childHead;
        if (childHead !== null) {
          childHead.prev = current;
        }
  
        // Traverse to the end of the flattened child list
        let childTail = childHead;
        while (childTail.next !== null) {
          childTail = childTail.next;
        }
  
        // Link the child list's tail to the next node (if any)
        childTail.next = nextNode;
        if (nextNode !== null) {
          nextNode.prev = childTail;
        }
  
        // Clear the child pointer
        current.child = null;
      }
      current = current.next;
    }
  
    return head;  // Return the head of the flattened list
  }

  function createDoublyLinkedList(arr) {
    let head = null;
    let current = null;
  
    for (let value of arr) {
      const newNode = new Node(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        newNode.prev = current;
        current = current.next;
      }
    }
    return head;
  }
  
  function linkChild(parent, childNode) {
    parent.child = childNode;
  }

  function printList(head) {
    let current = head;
    let result = [];
  
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' <-> '));
  }

  // Example usage
let list = createDoublyLinkedList([1, 2, 3, 4, 5]);
let child1 = createDoublyLinkedList([6, 7, 8]);
let child2 = createDoublyLinkedList([9, 10]);

// Linking child lists to nodes
linkChild(list.next, child1);  // Node with value 2 has a child list
linkChild(list.next.next.next, child2);  // Node with value 4 has a child list

console.log("Original Multilevel Doubly Linked List:");
printList(list);

// Flatten the list
const flattenedList = flatten(list);

console.log("Flattened Doubly Linked List:");
printList(flattenedList);

//6.add two numbers represented by linked lists

function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify code
    let current = dummyHead; // Pointer to the current node in the result list
    let carry = 0; // Variable to store carry
  
    // Traverse both linked lists
    while (l1 !== null || l2 !== null || carry !== 0) {
      let sum = carry; // Start with carry from the previous iteration
  
      // Add the value of the current node of l1 if it exists
      if (l1 !== null) {
        sum += l1.value;
        l1 = l1.next;
      }
  
      // Add the value of the current node of l2 if it exists
      if (l2 !== null) {
        sum += l2.value;
        l2 = l2.next;
      }
  
      // Update the carry for the next iteration
      carry = Math.floor(sum / 10);
  
      // Create a new node for the current digit (sum % 10)
      current.next = new ListNode(sum % 10);
      current = current.next; // Move the current pointer forward
    }
  
    // Return the next of the dummy head, as the dummy node is a placeholder
    return dummyHead.next;
  }

  function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }

  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }

  // Example usage:
const l1 = createLinkedList([2, 4, 3]); // Represents the number 342
const l2 = createLinkedList([5, 6, 4]); // Represents the number 465

console.log("Linked List 1:");
printLinkedList(l1);

console.log("Linked List 2:");
printLinkedList(l2);

// Add the two numbers represented by the linked lists
const result = addTwoNumbers(l1, l2);

console.log("Result of Addition:");
printLinkedList(result);

//7.partition a linked list around a value x.

function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function partition(head, x) {
    if (!head) return null;
  
    let lessHead = new ListNode(0); // Dummy head for the list of nodes less than x
    let greaterHead = new ListNode(0); // Dummy head for the list of nodes greater or equal to x
  
    let less = lessHead; // Pointer to the current node in the "less than x" list
    let greater = greaterHead; // Pointer to the current node in the "greater or equal to x" list
    let current = head; // Pointer to traverse the original list
  
    // Traverse the original linked list
    while (current !== null) {
      if (current.value < x) {
        less.next = current; // Add to the "less" list
        less = less.next;
      } else {
        greater.next = current; // Add to the "greater" list
        greater = greater.next;
      }
      current = current.next;
    }
  
    // Now, we need to connect the two lists
    greater.next = null; // End the greater list
    less.next = greaterHead.next; // Link the "less" list to the "greater" list
  
    return lessHead.next; // Return the merged list, skipping the dummy head
  }

  function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }
  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }

  // Example usage
const list = createLinkedList([1, 4, 3, 2, 5, 2]);
console.log("Original Linked List:");
printLinkedList(list);

// Partition the list around value x = 3
const partitionedList = partition(list, 3);

console.log("Partitioned Linked List (around 3):");
printLinkedList(partitionedList);


//8.clone a linked list with random pointers

function ListNode(value) {
    this.value = value;
    this.next = null;
    this.random = null;
  }

  function cloneLinkedList(head) {
    if (!head) return null;
  
    // Step 1: Insert a copy of each node after the original node
    let current = head;
    while (current !== null) {
      let newNode = new ListNode(current.value);
      newNode.next = current.next;
      current.next = newNode;
      current = newNode.next;
    }
  
    // Step 2: Set the random pointers of the new nodes
    current = head;
    while (current !== null) {
      if (current.random) {
        current.next.random = current.random.next;
      }
      current = current.next.next;
    }
  
    // Step 3: Separate the original list and the cloned list
    current = head;
    let clonedHead = head.next;
    let clonedCurrent = clonedHead;
  
    while (current !== null) {
      current.next = current.next.next; // Restore the original list
      if (clonedCurrent.next) {
        clonedCurrent.next = clonedCurrent.next.next; // Link the cloned list
        clonedCurrent = clonedCurrent.next;
      }
      current = current.next;
    }
  
    return clonedHead;
  }

  function createLinkedListWithRandomPointers(arr, randomIndices) {
    if (arr.length === 0) return null;
  
    let nodes = [];
    for (let value of arr) {
      nodes.push(new ListNode(value));
    }
  
    // Set the `next` pointers
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
  
    // Set the `random` pointers based on the randomIndices array
    for (let i = 0; i < randomIndices.length; i++) {
      if (randomIndices[i] !== null) {
        nodes[i].random = nodes[randomIndices[i]];
      } else {
        nodes[i].random = null;
      }
    }
  
    return nodes[0]; // Return the head of the list
  }

  function printLinkedListWithRandomPointers(head) {
    let current = head;
    let result = [];
  
    while (current !== null) {
      let randomValue = current.random ? current.random.value : null;
      result.push(`Value: ${current.value}, Random: ${randomValue}`);
      current = current.next;
    }
  
    console.log(result.join(' -> '));
  }

  // Example usage:

// Create a linked list [7, 13, 11, 10, 1] with random pointers
// Random indices array: [-1, 0, 4, 2, 0]
// The random pointers are:
// - Node 1 (7) points to null
// - Node 2 (13) points to Node 1 (7)
// - Node 3 (11) points to Node 5 (1)
// - Node 4 (10) points to Node 3 (11)
// - Node 5 (1) points to Node 1 (7)

const list = createLinkedListWithRandomPointers([7, 13, 11, 10, 1], [-1, 0, 4, 2, 0]);

console.log("Original Linked List with Random Pointers:");
printLinkedListWithRandomPointers(list);

// Clone the linked list
const clonedList = cloneLinkedList(list);

console.log("Cloned Linked List with Random Pointers:");
printLinkedListWithRandomPointers(clonedList);

//9.split a linked list into two halves

function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function splitLinkedList(head) {
    if (!head || !head.next) {
      return [head, null]; // If the list is empty or has only one node
    }
  
    let slow = head; // Slow pointer (will reach the middle)
    let fast = head; // Fast pointer (will reach the end)
  
    // Step 1: Move slow by one step and fast by two steps
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Step 2: Split the list into two halves
    let firstHalf = head; // The first half starts from the head
    let secondHalf = slow.next; // The second half starts from slow.next
    slow.next = null; // End the first half by setting slow.next to null
  
    return [firstHalf, secondHalf]; // Return the two halves
  }
  
  function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }

  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
  
  // Example usage:
const list = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log("Original Linked List:");
printLinkedList(list);

// Split the linked list into two halves
const [firstHalf, secondHalf] = splitLinkedList(list);

console.log("First Half:");
printLinkedList(firstHalf);

console.log("Second Half:");
printLinkedList(secondHalf);

//10.merge two sorted linked lists

function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function mergeSortedLists(l1, l2) {
    // Create a dummy node to serve as the start of the merged list
    let dummy = new ListNode(0);
    let current = dummy;
  
    // Compare nodes from both lists and build the merged list
    while (l1 !== null && l2 !== null) {
      if (l1.value < l2.value) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    // If one of the lists is not empty, append the rest of the nodes
    if (l1 !== null) {
      current.next = l1;
    } else if (l2 !== null) {
      current.next = l2;
    }
  
    return dummy.next; // The merged list starts from the next of the dummy node
  }

  function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }

  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }

  // Example usage:

// Create two sorted linked lists
const list1 = createLinkedList([1, 3, 5, 7]);
const list2 = createLinkedList([2, 4, 6, 8]);

console.log("List 1:");
printLinkedList(list1);

console.log("List 2:");
printLinkedList(list2);

// Merge the two sorted linked lists
const mergedList = mergeSortedLists(list1, list2);

console.log("Merged Sorted List:");
printLinkedList(mergedList);

//sort a linked list using merge sort

function ListNode(value) {
    this.value = value;
    this.next = null;
  }

  function mergeSort(head) {
    if (!head || !head.next) {
      return head; // Base case: a single node or empty list is already sorted
    }
  
    // Step 1: Split the list into two halves
    const middle = findMiddle(head);
    const secondHalf = middle.next;
    middle.next = null; // Break the list into two halves
  
    // Step 2: Recursively sort each half
    const leftSorted = mergeSort(head);
    const rightSorted = mergeSort(secondHalf);
  
    // Step 3: Merge the two sorted halves
    return merge(leftSorted, rightSorted);
  }
  
  // Helper function to find the middle of the list using slow and fast pointers
  function findMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  
  // Helper function to merge two sorted lists
  function merge(l1, l2) {
    // Create a dummy node to help with the merging process
    let dummy = new ListNode(0);
    let current = dummy;
  
    // Merge the two lists by comparing their nodes
    while (l1 !== null && l2 !== null) {
      if (l1.value < l2.value) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    // If one of the lists is not empty, append it to the result
    if (l1 !== null) {
      current.next = l1;
    } else if (l2 !== null) {
      current.next = l2;
    }
  
    return dummy.next; // Return the merged sorted list
  }

  function createLinkedList(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
      const newNode = new ListNode(value);
      if (head === null) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
    return head;
  }

  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
// Example usage:

// Create a linked list from an unsorted array
const list = createLinkedList([4, 2, 1, 3, 5]);

console.log("Original Linked List:");
printLinkedList(list);

// Sort the linked list using merge sort
const sortedList = mergeSort(list);

console.log("Sorted Linked List:");
printLinkedList(sortedList);
  