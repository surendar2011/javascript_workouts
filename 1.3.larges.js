let numbers = [10, 45, 32, 99, 7];

// Method 1: Using Math.max() with spread operator
// the spread operator ... converts the array into individual numbers, allowing Math.max() to work.
let maxNum = Math.max(...numbers);
console.log("Largest number:", maxNum);