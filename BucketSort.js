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



 //Bucket Sort


// Function to perform Bucket Sort
function bucketSort(arr) {
  if (arr.length === 0) {
    return arr;
  }

  // Find the minimum and maximum values in the array
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Create an array of buckets
  const bucketCount = max - min + 1;
  const buckets = new Array(bucketCount).fill(0);

  // Place elements into buckets
  for (let i = 0; i < arr.length; i++) {
    buckets[arr[i] - min]++;
  }

  // Concatenate sorted buckets
  let sortedArray = [];
  for (let i = 0; i < bucketCount; i++) {
    for (let j = 0; j < buckets[i]; j++) {
      sortedArray.push(i + min);
    }
  }

  return sortedArray;
}

// Function to read data from a file and sort it using Bucket Sort
function bucketSortFromFile(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Split the file content into an array of integers
    const arr = data.split('\n').filter(line => line !== '').map(Number);

    // Perform Bucket Sort on the array
    const sortedArray = bucketSort(arr);

    // Output the sorted array
    console.log('Sorted array:', sortedArray);
  });
}

const inputFileName = 'data.txt';
bucketSortFromFile(inputFileName);



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
