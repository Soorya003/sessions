//1.find the lcm of two numbers

// Function to find GCD using Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // Function to find LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }
  
  // Example usage:
  const num1 = 12;
  const num2 = 18;
  const result = lcm(num1, num2);
  console.log(result);  // Output: 36

  //2.generate a pyramid pattern of numbers

  function generatePyramid(n) {
    // Loop through each row
    for (let i = 1; i <= n; i++) {
      let row = '';
  
      // Add leading spaces for the current row
      for (let j = 1; j <= n - i; j++) {
        row += ' ';
      }
  
      // Add numbers in the current row
      for (let j = 1; j <= i; j++) {
        row += j;
      }
  
      // Print the row
      console.log(row);
    }
  }
  
  // Example usage:
  const rows = 5;
  generatePyramid(rows);
  
//3.calculate the gcd of two numbers

// Function to calculate GCD using the Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // Example usage:
  const num1 = 56;
  const num2 = 98;
  const result = gcd(num1, num2);
  console.log(result);  // Output: 14

  //4.check if a number is a palindrome

  function isPalindrome(num) {
    // Convert the number to a string
    const str = num.toString();
    
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
  }
  
  // Example usage:
  const number = 121;
  const result = isPalindrome(number);
  console.log(result);  // Output: true
  
  const number2 = -121;
  const result2 = isPalindrome(number2);
  console.log(result2);  // Output: false

  //5.print an inverted triangle pattern of stars

  function printInvertedTriangle(rows) {
    // Outer loop to handle the number of rows
    for (let i = rows; i >= 1; i--) {
      let row = '';
      
      // Inner loop to print stars in each row
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
  
      // Print the row of stars
      console.log(row);
    }
  }
  
  // Example usage:
  const rows = 5;
  printInvertedTriangle(rows);

  //6.check if two numbers are coprime

  // Function to calculate the GCD of two numbers using the Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // Function to check if two numbers are coprime
  function areCoprime(a, b) {
    return gcd(a, b) === 1;
  }
  
  // Example usage:
  const num1 = 14;
  const num2 = 25;
  const result = areCoprime(num1, num2);
  console.log(result);  // Output: true (because gcd(14, 25) is 1)
  
  const num3 = 14;
  const num4 = 28;
  const result2 = areCoprime(num3, num4);
  console.log(result2);  // Output: false (because gcd(14, 28) is 14, not 1)

  //7.print a diamond pattern of stars

  function printDiamond(n) {
    // Print the top half of the diamond (including the middle row)
    for (let i = 1; i <= n; i++) {
      let row = '';
  
      // Add leading spaces for the current row
      for (let j = 1; j <= n - i; j++) {
        row += ' ';
      }
  
      // Add stars for the current row
      for (let j = 1; j <= (2 * i - 1); j++) {
        row += '*';
      }
  
      // Print the row
      console.log(row);
    }
  
    // Print the bottom half of the diamond
    for (let i = n - 1; i >= 1; i--) {
      let row = '';
  
      // Add leading spaces for the current row
      for (let j = 1; j <= n - i; j++) {
        row += ' ';
      }
  
      // Add stars for the current row
      for (let j = 1; j <= (2 * i - 1); j++) {
        row += '*';
      }
  
      // Print the row
      console.log(row);
    }
  }
  
  // Example usage:
  const rows = 5;
  printDiamond(rows);

  //8.print pascal's triangle upto N rows

  function printPascalsTriangle(n) {
    // Create a 2D array to store the triangle
    let triangle = [];
  
    for (let row = 0; row < n; row++) {
      // Start each row with an empty array
      let currentRow = [];
  
      for (let col = 0; col <= row; col++) {
        // The first and last elements of each row are 1
        if (col === 0 || col === row) {
          currentRow.push(1);
        } else {
          // Other elements are the sum of the two elements above it
          currentRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
        }
      }
  
      // Add the current row to the triangle
      triangle.push(currentRow);
    }
  
    // Print the triangle
    for (let i = 0; i < n; i++) {
      let row = '';
      // Print spaces to center align the triangle
      for (let j = 0; j < n - i - 1; j++) {
        row += ' ';
      }
      // Print the numbers in the current row
      row += currentRow.join(' ');
      console.log(row);
    }
  }
  
  // Example usage:
  const n = 5; // Number of rows in Pascal's Triangle
  printPascalsTriangle(n);

  //9.find all divisors of a number

  function findDivisors(num) {
    let divisors = [];
  
    // Loop through numbers from 1 to the square root of num
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i); // i is a divisor
        if (i !== num / i) {
          divisors.push(num / i); // num / i is also a divisor if different
        }
      }
    }
  
    return divisors.sort((a, b) => a - b); // Sort divisors in ascending order
  }
  
  // Example usage:
  const number = 36;
  const result = findDivisors(number);
  console.log(result);  // Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]

  //10.print a checkerboard pattern

  function printCheckerboard(rows, cols) {
    for (let i = 0; i < rows; i++) {
      let row = '';
      
      for (let j = 0; j < cols; j++) {
        // Alternate between '*' and space
        if ((i + j) % 2 === 0) {
          row += '*';
        } else {
          row += ' ';
        }
      }
  
      // Print the row after constructing it
      console.log(row);
    }
  }
  
  // Example usage:
  const rows = 8;  // Number of rows in the checkerboard
  const cols = 8;  // Number of columns in the checkerboard
  printCheckerboard(rows, cols);
  