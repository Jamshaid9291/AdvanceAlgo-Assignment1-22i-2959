const fs = require('fs');

// Function to generate a random whole number between min and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate and write random numbers to a text file
function generateRandomNumbersToFile(size, fileName) {
  const fileStream = fs.createWriteStream(fileName);

  for (let i = 0; i < size; i++) {
    const randomNumber = getRandomInt(1, 1000); // Change the range as needed
    fileStream.write(randomNumber.toString() + '\n');
  }

  fileStream.end();
  console.log(`Generated ${size} random numbers and saved to ${fileName}`);
}

const listSize = 100;
const fileName = 'Data.txt';

generateRandomNumbersToFile(listSize, fileName);



 // Merge Sort


// Merge function to combine two sorted arrays
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Merge Sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// Function to read data from a file and sort it using Merge Sort
function mergeSortFromFile(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Split the file content into an array of integers
    const arr = data.split('\n').filter(line => line !== '').map(Number);

    // Perform Merge Sort on the array
    const sortedArray = mergeSort(arr);

    // Output the sorted array
    console.log('Sorted array:', sortedArray);
  });
}

const inputFileName = 'data.txt';
mergeSortFromFile(inputFileName);


// Start measuring time
const startTime = Date.now();

// Code to measure
for (let i = 0; i < 1000000; i++) {
  // Your code here
}

// Stop measuring time
const endTime = Date.now();

// Calculate the elapsed time in seconds
const elapsedTimeInSeconds = (endTime - startTime) / 1000;

console.log(`Execution time: ${elapsedTimeInSeconds} seconds`);
