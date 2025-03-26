let str = "hello";

// Step 1: Convert the string into an array of characters; Reason: JavaScript strings are immutable, meaning you can't modify them directly.
let charArray = str.split(''); 

// Step 2: Reverse the array
let reversedArray = charArray.reverse(); 

// Step 3: Join the reversed characters back into a string
let reversedStr = reversedArray.join(''); 

// Step 4: Print the result
console.log(reversedStr); // Output: "olleh"
