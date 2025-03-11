//1.concatenate two strings

// Concatenating two strings using the + operator
let str1 = "Hello, ";
let str2 = "World!";
let result = str1 + str2;
console.log(result);  // Output: "Hello, World!"

//2.find the frequency of each character in the string

function getCharacterFrequency(str) {
    const frequency = {};  // Object to store character frequencies
    
    // Loop through the string
    for (let char of str) {
      if (frequency[char]) {
        frequency[char] += 1;  // Increment the count if character already exists
      } else {
        frequency[char] = 1;  // Initialize the count if character is found for the first time
      }
    }
    
    return frequency;
  }
  
  // Example usage:
  const inputString = "hello world";
  const result = getCharacterFrequency(inputString);
  console.log(result);
  // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

  //3.replace spaces in a string with %20

  function replaceSpaces(str) {
    return str.replace(/ /g, '%20');
  }
  
  // Example usage:
  const inputString = "Hello World, how are you?";
  const result = replaceSpaces(inputString);
  console.log(result);  // Output: "Hello%20World,%20how%20are%20you?"

  //4.check if a string ia a anagram and panagram of another

  function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
  
    // If lengths are not the same, they can't be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Sort the characters and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  function isPangram(str) {
    // Remove spaces and convert to lowercase
    str = str.replace(/\s+/g, '').toLowerCase();
  
    // Check if all 26 letters are present
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of alphabet) {
      if (!str.includes(char)) {
        return false;
      }
    }
    return true;
  }
  
  function isAnagramAndPangram(str1, str2) {
    return isAnagram(str1, str2) && isPangram(str1) && isPangram(str2);
  }
  
  // Example usage:
  const str1 = "The quick brown fox jumps over the lazy dog";
  const str2 = "dog lazy the over jumps fox brown quick The";
  
  const result = isAnagramAndPangram(str1, str2);
  console.log(result);  // Output: true
  
  const str3 = "Hello World!";
  const str4 = "dlroW olleH";
  
  const result2 = isAnagramAndPangram(str3, str4);
  console.log(result2);  // Output: false (Not a pangram)

  
  //5.count the number of words in a sentence

  function countWords(sentence) {
    // Trim the sentence to remove any leading/trailing spaces, and then split by spaces
    const words = sentence.trim().split(/\s+/);  // Regular expression to split on one or more spaces
    
    // Return the length of the resulting array (number of words)
    return words.length;
  }
  
  // Example usage:
  const sentence = "This is a sample sentence with several words.";
  const result = countWords(sentence);
  console.log(result);  // Output: 7

  //6.find the first non repeating character in a string

  function firstNonRepeatingCharacter(str) {
    const charFrequency = {};
  
    // Count the frequency of each character
    for (let char of str) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    // Find the first character with a frequency of 1
    for (let char of str) {
      if (charFrequency[char] === 1) {
        return char;
      }
    }
  
    return null;  // Return null if no non-repeating character is found
  }
  
  // Example usage:
  const str = "swiss";
  const result = firstNonRepeatingCharacter(str);
  console.log(result);  // Output: "w"

  //7.remove all vowels from a string

  function removeVowels(str) {
    // Use a regular expression to replace all vowels (both lowercase and uppercase)
    return str.replace(/[aeiouAEIOU]/g, '');
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  const result = removeVowels(inputString);
  console.log(result);  // Output: "Hll, Wrld!"

  //8.find the shortest word in a sentence

  function findShortestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
  
    // Initialize the shortest word as the first word
    let shortestWord = words[0];
  
    // Loop through the words to find the shortest one
    for (let word of words) {
      if (word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
  
    return shortestWord;
  }
  
  // Example usage:
  const sentence = "The quick brown fox jumps over the lazy dog";
  const result = findShortestWord(sentence);
  console.log(result);  // Output: "The"

  //9.count occurences of a substring within a string

  function countSubstringOccurrences(str, substring) {
    let count = 0;
    let index = 0;
  
    // Loop to find each occurrence of the substring
    while ((index = str.indexOf(substring, index)) !== -1) {
      count++;
      index += substring.length;  // Move index forward to search for the next occurrence
    }
  
    return count;
  }
  
  // Example usage:
  const str = "This is a test string and this is another test string.";
  const substring = "test";
  const result = countSubstringOccurrences(str, substring);
  console.log(result);  // Output: 2
  