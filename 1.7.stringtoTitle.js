// Convert a string to title case

function toTitleCase(str){
    return str
        .toLowerCase()
        .split()
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


let sentence = "hello world, welcome to javascript"
let titleCaseSentence = toTitleCase(sentence);
console.log(titleCaseSentence); // Output: "Hello World, Welcome To Javascript!"

/*
📌 Example
let word = "hello";
console.log(word.charAt(0)); // Output: "h"  (First letter)
console.log(word.slice(1));  // Output: "ello" (Rest of the word)
*/
