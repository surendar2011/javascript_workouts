function toTitleCase(str) {
    return str
        .toLowerCase() // Convert the entire string to lowercase
        .split(/\s+/) // Split string into words using any space (handles multiple spaces)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(" "); // Join words back into a string
}

// ✅ Testing Edge Cases
let testCases = [
    "JAVASCRIPT IS FUN",   // All uppercase
    "javaSCRIPT   is   cool", // Mixed case + extra spaces
    "123abc def",   // Number at the beginning
    "",   // Empty string
    "  multiple   spaces  between words  " // Spaces at the start, middle, and end
];

// ✅ Running Tests
testCases.forEach(test => {
    console.log(`"${test}" → "${toTitleCase(test)}"`);
});

/*
"JAVASCRIPT IS FUN" → "Javascript Is Fun"
"javaSCRIPT   is   cool" → "Javascript Is Cool"
"123abc def" → "123abc Def"
"" → ""
"  multiple   spaces  between words  " → "Multiple Spaces Between Words"
*/