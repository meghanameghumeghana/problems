Function findMaxValue(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for empty arrays
  }

  let maxValue = arr[0]; // Initialize maxValue with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i]; // Update maxValue if a larger element is found
    }
  }

  return maxValue;
}

const numbers = [5, 8, 2, 10, 3];
const max = findMaxValue(numbers);
console.log("The maximum value is:", max);





Function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenCount = countEvenNumbers(numbers);
console.log(`Number of even numbers: ${evenCount}`);