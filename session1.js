//1.calculate the difference between two integers

function calculateDifference(a, b) {
    return Math.abs(a - b); // Using Math.abs() to ensure the difference is always positive
  }
  
  // Example usage:
  const num1 = 10;
  const num2 = 4;
  const difference = calculateDifference(num1, num2);
  console.log(difference);  // Output: 6
  
  const num3 = 2;
  const num4 = 8;
  const difference2 = calculateDifference(num3, num4);
  console.log(difference2);  // Output: 6

  //2.check if a number is even or odd

  function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return 'Even'; // The number is even
    } else {
      return 'Odd'; // The number is odd
    }
  }
  
  // Example usage:
  const number1 = 10;
  console.log(checkEvenOdd(number1));  // Output: Even
  
  const number2 = 7;
  console.log(checkEvenOdd(number2));  // Output: Odd

  //3.calculate the perimeter of a rectangle

  function calculatePerimeter(length, width) {
    return 2 * (length + width);  // Formula for the perimeter of a rectangle
  }
  
  // Example usage:
  const length = 5;
  const width = 3;
  const perimeter = calculatePerimeter(length, width);
  console.log(perimeter);  // Output: 16

  
  //4.find the largest of four numbers

  function findLargest(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4); // Math.max finds the largest number
  }
  
  // Example usage:
  const num1 = 5;
  const num2 = 12;
  const num3 = 8;
  const num4 = 10;
  
  const largest = findLargest(num1, num2, num3, num4);
  console.log(largest);  // Output: 12

  //5.calculate the average of three numbers

  function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;  // Formula to calculate the average
  }
  
  // Example usage:
  const num1 = 5;
  const num2 = 8;
  const num3 = 12;
  
  const average = calculateAverage(num1, num2, num3);
  console.log(average);  // Output: 8.333333333333334

  //6.count the number of vowels in a string

  function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU"; // String of vowels (both lowercase and uppercase)
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) { // Check if the character is a vowel
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const inputString = "Hello World";
  const numberOfVowels = countVowels(inputString);
  console.log(numberOfVowels);  // Output: 3

  //7.determine if a character is uppercase

  function isUppercase(char) {
    // Check if the character is between 'A' and 'Z'
    return char === char.toUpperCase() && char !== char.toLowerCase();
  }
  
  // Example usage:
  const char1 = 'A';
  console.log(isUppercase(char1));  // Output: true
  
  const char2 = 'a';
  console.log(isUppercase(char2));  // Output: false
  
  const char3 = 'Z';
  console.log(isUppercase(char3));  // Output: true
  
  const char4 = 'z';
  console.log(isUppercase(char4));  // Output: false

  //8.print the reverse of a string

  function reverseString(str) {
    return str.split('').reverse().join(''); // Split, reverse, and join the string
  }
  
  // Example usage:
  const inputString = "Hello World";
  const reversedString = reverseString(inputString);
  console.log(reversedString);  // Output: "dlroW olleH"

  //9.find the square of a number

  function square(num) {
    return num * num;  // Multiply the number by itself
  }
  
  // Example usage:
  const number = 5;
  const result = square(number);
  console.log(result);  // Output: 25
  




  