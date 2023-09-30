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
