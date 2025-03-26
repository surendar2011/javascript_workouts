let numbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

/*
Why new Set(numbers)?

Set is like a blueprint (class), and we need new to create an actual object from it.

The result is an instance of the Set class, which stores only unique values.


let numbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueSet = new Set(numbers); // ✅ Creates a Set object
console.log(uniqueSet); // Output: Set { 1, 2, 3, 4, 5 }

*/

