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

const listSize = 100000;
const fileName = 'Data.txt';

generateRandomNumbersToFile(listSize, fileName);


 // // Radix Sort


 // Function to find the maximum number in an array
 function getMax(arr) {
   let max = arr[0];
   for (let i = 1; i < arr.length; i++) {
     if (arr[i] > max) {
       max = arr[i];
     }
   }
   return max;
 }
 
 // A helper function for counting sort used in radix sort
 function countingSort(arr, exp) {
   const n = arr.length;
   const output = new Array(n).fill(0);
   const count = new Array(10).fill(0);
 
   for (let i = 0; i < n; i++) {
     count[Math.floor(arr[i] / exp) % 10]++;
   }
 
   for (let i = 1; i < 10; i++) {
     count[i] += count[i - 1];
   }
 
   for (let i = n - 1; i >= 0; i--) {
     output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
     count[Math.floor(arr[i] / exp) % 10]--;
   }
 
   for (let i = 0; i < n; i++) {
     arr[i] = output[i];
   }
 }
 
 // Radix sort function
 function radixSort(arr) {
   const max = getMax(arr);
 
   for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
     countingSort(arr, exp);
   }
 }
 
 // Read data from a file and sort it
 function radixSortFromFile(fileName) {
   fs.readFile(fileName, 'utf8', (err, data) => {
     if (err) {
       console.error('Error reading file:', err);
       return;
     }
 
     // Split the file content into an array of integers
     const arr = data.split('\n').filter(line => line !== '').map(Number);
 
     // Perform radix sort on the array
     radixSort(arr);
 
     // Output the sorted array
     console.log('Sorted array:', arr);
   });
 }
 
 // Example usage: Provide the path to your input file
 const inputFileName = 'data.txt';
 radixSortFromFile(inputFileName);
 



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
