// Write a function to check if two arrays are equal

function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;  // ✅ Check if lengths are different

    return arr1.every((value, index) => value === arr2[index]); 
    // ✅ .every() checks if all elements match at each index
}

// ✅ Example Usage
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // Output: true
console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // Output: false
console.log(areArraysEqual([1, 2, 3], [1, 2])); // Output: false
console.log(areArraysEqual([], [])); // Output: true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // Output: false (Order matters!)


/*
Built-in Methods Used:
Method	    Purpose
.length	    Checks the number of elements in both arrays
.every()	Iterates through all elements and ensures they match

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let result = arr1.every((value, index) => value === arr2[index]);
console.log(result); // ✅ Output: true


*/