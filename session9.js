//1.perform an inorder traversal iteratively

// Define a basic tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Inorder traversal (iterative) function
function inorderTraversal(root) {
    let stack = [];
    let result = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        // Reach the leftmost node of the current node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        // Current must be null at this point
        current = stack.pop();
        result.push(current.val);  // Add the node value to the result

        // Now visit the right subtree
        current = current.right;
    }

    return result;
}

// Example usage:
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root));  // Output: [1, 3, 2]

//2.calculate the sum of all nodes in a binary tree

class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
 
  function sumOfNodes(root) {
    // Base case: if the node is null, return 0
    if (root === null) {
      return 0;
    }
  
    // Recursively calculate the sum of the left and right subtrees
    return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
  }
  
  // Create the binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the sum of all nodes
console.log(sumOfNodes(root));  // Output: 15 (1 + 2 + 3 + 4 + 5)

//3.find the diameter of a binary tree

class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function diameterOfBinaryTree(root) {
    let maxDiameter = 0;  // Variable to keep track of the maximum diameter
  
    // Helper function to calculate height and update max diameter
    function height(node) {
      if (node === null) {
        return 0;  // Base case: null node has height 0
      }
  
      // Recursively calculate the height of left and right subtrees
      let leftHeight = height(node.left);
      let rightHeight = height(node.right);
  
      // The diameter of the current node is the sum of the left and right heights
      maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
  
      // Return the height of the current node
      return 1 + Math.max(leftHeight, rightHeight);
    }
  
    // Start the recursion from the root
    height(root);
  
    // Return the maximum diameter found
    return maxDiameter;
  }
  
  // Example Usage:
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log(diameterOfBinaryTree(root));  // Output: 3 (path: 4 -> 2 -> 1 -> 3)

  //4.check if two binary trees are identical

  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function areIdentical(root1, root2) {
    // If both nodes are null, they are identical
    if (root1 === null && root2 === null) {
      return true;
    }
  
    // If one of the nodes is null and the other is not, they are not identical
    if (root1 === null || root2 === null) {
      return false;
    }
  
    // Check if the values of the nodes are the same
    // and recursively check left and right subtrees
    return (root1.val === root2.val) && 
           areIdentical(root1.left, root2.left) && 
           areIdentical(root1.right, root2.right);
  }
  
  // Example Usage:
  let tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(3);
  tree1.left.left = new TreeNode(4);
  tree1.left.right = new TreeNode(5);
  
  let tree2 = new TreeNode(1);
  tree2.left = new TreeNode(2);
  tree2.right = new TreeNode(3);
  tree2.left.left = new TreeNode(4);
  tree2.left.right = new TreeNode(5);
  
  let tree3 = new TreeNode(1);
  tree3.left = new TreeNode(2);
  tree3.right = new TreeNode(3);
  tree3.left.left = new TreeNode(6);  // Different value here
  
  console.log(areIdentical(tree1, tree2));  // Output: true (identical trees)
  console.log(areIdentical(tree1, tree3));  // Output: false (different structure/value)

  //5.convert a binary tree to a doubly linked list

  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class DLLNode {
    constructor(val = 0, prev = null, next = null) {
      this.val = val;
      this.prev = prev;
      this.next = next;
    }
  }
  
  function binaryTreeToDLL(root) {
    let head = null;
    let prev = null;
  
    function inOrderTraversal(node) {
      if (node === null) return;
  
      // Traverse left subtree
      inOrderTraversal(node.left);
  
      // Convert the current tree node into a DLL node
      let current = new DLLNode(node.val);
  
      // Link the previous node to the current node
      if (prev === null) {
        // This is the first node, set it as head
        head = current;
      } else {
        prev.next = current;
        current.prev = prev;
      }
  
      // Update the previous node to the current node
      prev = current;
  
      // Traverse right subtree
      inOrderTraversal(node.right);
    }
  
    // Start the in-order traversal
    inOrderTraversal(root);
  
    return head;
  }
  
  // Helper function to print the doubly linked list
  function printDLL(head) {
    let current = head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
  
  // Example Usage:
  
  // Creating a binary tree
  let root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(6);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(7);
  
  // Convert binary tree to DLL
  let dllHead = binaryTreeToDLL(root);
  
  // Print the doubly linked list
  printDLL(dllHead);  // Output: 1 2 3 4 5 6 7

  //6.construct a binary tree from its inorder and preorder traversals

  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function buildTree(preorder, inorder) {
    // Helper function to build the tree
    function build(preStart, inStart, inEnd) {
      if (preStart >= preorder.length || inStart > inEnd) {
        return null; // Base case: no more nodes to process
      }
  
      // The first element in preorder is the root node
      let rootVal = preorder[preStart];
      let root = new TreeNode(rootVal);
  
      // Find the index of the root node in inorder traversal
      let inIndex = inorder.indexOf(rootVal, inStart);
  
      // Recursively build the left subtree and right subtree
      root.left = build(preStart + 1, inStart, inIndex - 1);
      root.right = build(preStart + 1 + (inIndex - inStart), inIndex + 1, inEnd);
  
      return root;
    }
  
    return build(0, 0, inorder.length - 1);
  }
  
  // Helper function to print the tree (Inorder Traversal)
  function printInOrder(root) {
    if (root === null) return;
    printInOrder(root.left);
    console.log(root.val);
    printInOrder(root.right);
  }
  
  // Example Usage:
  let preorder = [4, 2, 1, 3, 6, 5, 7];  // Preorder traversal
  let inorder = [1, 2, 3, 4, 5, 6, 7];   // Inorder traversal
  
  let tree = buildTree(preorder, inorder);
  
  // Print the tree using inorder traversal (should match the input inorder)
  printInOrder(tree);  // Output: 1 2 3 4 5 6 7

  //7.print all nodes at k distance from the root

  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function printNodesAtKDistance(root, k) {
    if (root === null) {
      return;  // If the tree is empty, nothing to print
    }
  
    // Helper function to perform DFS and print nodes at distance k
    function dfs(node, currentDistance) {
      if (node === null) {
        return;
      }
  
      // If the current distance is equal to k, print the node's value
      if (currentDistance === k) {
        console.log(node.val);
        return;
      }
  
      // Otherwise, continue the DFS on the left and right subtrees
      dfs(node.left, currentDistance + 1);
      dfs(node.right, currentDistance + 1);
    }
  
    // Start DFS from the root node with initial distance 0
    dfs(root, 0);
  }
  
  // Example Usage:
  // Constructing a binary tree
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  // Print nodes at distance 2 from the root
  printNodesAtKDistance(root, 2);  // Output: 4 5 6 7

  //8.serialize and deserialize a binary tree

  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTreeSerializer {
    // Serialize the tree into a string
    serialize(root) {
      const result = [];
      
      function preorder(node) {
        if (node === null) {
          result.push('null'); // Use 'null' as a marker for null nodes
          return;
        }
        result.push(node.val.toString()); // Save the value of the node
        preorder(node.left); // Traverse the left subtree
        preorder(node.right); // Traverse the right subtree
      }
      
      preorder(root); // Start preorder traversal from the root
      return result.join(','); // Join the array into a single string
    }
  
    // Deserialize a string back into a tree
    deserialize(data) {
      const nodes = data.split(','); // Split the string into an array of nodes
      let index = 0; // To keep track of the current position in the array
      
      function buildTree() {
        if (nodes[index] === 'null') {
          index++; // Move to the next element
          return null; // Return null for the current node
        }
        
        // Create a new node with the current value
        const node = new TreeNode(parseInt(nodes[index]));
        index++; // Move to the next element
        node.left = buildTree(); // Build the left subtree
        node.right = buildTree(); // Build the right subtree
        return node;
      }
      
      return buildTree(); // Start the deserialization process
    }
  }
  
  // Example Usage:
  
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Create a BinaryTreeSerializer instance
  let serializer = new BinaryTreeSerializer();
  
  // Serialize the binary tree
  let serialized = serializer.serialize(root);
  console.log("Serialized Tree:", serialized); // Output: "1,2,4,null,null,5,null,null,3,null,null"
  
  // Deserialize the tree back from the serialized string
  let deserializedTree = serializer.deserialize(serialized);
  console.log("Deserialized Tree Root:", deserializedTree.val); // Output: 1

  //9.find the level with the maximum sum in a binary tree

  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function maxSumLevel(root) {
    if (!root) return -1; // If the tree is empty, return -1 (no levels)
  
    let queue = [root]; // Initialize the queue with the root node
    let maxSum = -Infinity; // Variable to track the maximum sum
    let maxLevel = -1; // Variable to track the level with the maximum sum
    let level = 0; // Start from level 0
  
    while (queue.length > 0) {
      let levelSize = queue.length; // Number of nodes at the current level
      let currentLevelSum = 0; // To store the sum of nodes at the current level
  
      // Process all nodes at the current level
      for (let i = 0; i < levelSize; i++) {
        let node = queue.shift(); // Dequeue the front node
        currentLevelSum += node.val; // Add the node's value to the current level sum
  
        // Enqueue the left and right children if they exist
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  
      // Update maxSum and maxLevel if the current level's sum is greater
      if (currentLevelSum > maxSum) {
        maxSum = currentLevelSum;
        maxLevel = level;
      }
  
      level++; // Move to the next level
    }
  
    return maxLevel; // Return the level with the maximum sum
  }
  
  // Example Usage:
  // Constructing a binary tree
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  // Find the level with the maximum sum
  console.log(maxSumLevel(root));  // Output: 2 (Level 2 has the maximum sum 22)

  //10.calculate the depth of the deepest leaf node

  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function maxDepthOfLeafNode(root) {
    if (!root) return -1; // If the tree is empty, return -1 (no leaf nodes)
  
    let maxDepth = -1; // Variable to track the maximum depth of a leaf node
  
    function dfs(node, depth) {
      if (!node) return;
  
      // If it's a leaf node (both left and right are null), check its depth
      if (!node.left && !node.right) {
        maxDepth = Math.max(maxDepth, depth);
      }
  
      // Recursively call dfs for left and right subtrees with incremented depth
      if (node.left) dfs(node.left, depth + 1);
      if (node.right) dfs(node.right, depth + 1);
    }
  
    // Start DFS traversal from the root with depth 0
    dfs(root, 0);
  
    return maxDepth; // Return the maximum depth found
  }
  
  // Example Usage:
  // Constructing a binary tree
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  // Calculate the depth of the deepest leaf node
  console.log(maxDepthOfLeafNode(root));  // Output: 2 (Leaf nodes 4, 5, 6, and 7 are at depth 2)

  //11.convert a BST to a balanced BST

  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Step 1: Perform an in-order traversal to get sorted values
  function inOrderTraversal(root, result = []) {
    if (root === null) return result;
    inOrderTraversal(root.left, result);
    result.push(root.val); // Add the node value to the result array
    inOrderTraversal(root.right, result);
    return result;
  }
  
  // Step 2: Build a balanced BST from a sorted array
  function sortedArrayToBST(arr) {
    if (arr.length === 0) return null;
  
    // Find the middle element to make it the root
    const mid = Math.floor(arr.length / 2);
    const root = new TreeNode(arr[mid]);
  
    // Recursively build the left and right subtrees
    root.left = sortedArrayToBST(arr.slice(0, mid)); // Left half
    root.right = sortedArrayToBST(arr.slice(mid + 1)); // Right half
  
    return root;
  }
  
  // Main function to convert the BST to a balanced BST
  function convertToBalancedBST(root) {
    // Step 1: Get the sorted values from the BST via in-order traversal
    const sortedValues = inOrderTraversal(root);
  
    // Step 2: Construct a balanced BST from the sorted values
    return sortedArrayToBST(sortedValues);
  }
  
  // Helper function to print the tree (In-order Traversal)
  function printInOrder(root) {
    if (root === null) return;
    printInOrder(root.left);
    console.log(root.val);
    printInOrder(root.right);
  }
  
  // Example Usage:
  // Constructing an unbalanced BST
  let root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(7);
  root.right.right = new TreeNode(20);
  
  // Convert the BST to a balanced BST
  let balancedRoot = convertToBalancedBST(root);
  
  // Print the balanced BST (In-order traversal)
  printInOrder(balancedRoot);  // Output will be a balanced BST
  