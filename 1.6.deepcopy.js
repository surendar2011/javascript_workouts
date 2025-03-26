// Original object with nested structures
let original = {
    name: "Alice",
    age: 25,
    details: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "coding"],
    date: new Date(),
};

// Deep copy using structuredClone()
let deepCopiedObj = structuredClone(original);

// Modifying the copied object
deepCopiedObj.name = "Bob";
deepCopiedObj.details.city = "Los Angeles";
deepCopiedObj.hobbies.push("gaming");

console.log("Original:", original);
console.log("Copied:", deepCopiedObj);
