function findMissingNumbers(arr) {
    let min = Math.min(...arr);  // ✅ Built-in method: Finds the minimum value
    let max = Math.max(...arr);  // ✅ Built-in method: Finds the maximum value

    let numSet = new Set(arr);   // ✅ Built-in Set object to store unique numbers
    let missingNumbers = [];

    for (let i = min; i <= max; i++) { // ✅ Loop through the full range
        if (!numSet.has(i)) {  // ✅ Built-in method: .has() checks if number exists in Set
            missingNumbers.push(i);  // ✅ Built-in method: .push() adds missing number to the array
        }
    }
    return missingNumbers;
}

// ✅ Example Usage
let numbers = [1, 4, 3, 7, 8, 2, 10]; // Missing numbers: 5, 6, 9
console.log(findMissingNumbers(numbers)); // Output: [5, 6, 9]

