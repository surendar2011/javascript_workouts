// Original object with nested structures; A deep copy means cloning an object recursively, 
// ensuring that even nested objects are copied and not just referenced.
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

/*
OUTPUT:
Original: { 
  name: 'Alice', 
  age: 25, 
  details: { city: 'New York', country: 'USA' }, 
  hobbies: [ 'reading', 'coding' ], 
  date: 2025-03-25T10:00:00.000Z 
}

Copied: { 
  name: 'Bob', 
  age: 25, 
  details: { city: 'Los Angeles', country: 'USA' }, 
  hobbies: [ 'reading', 'coding', 'gaming' ], 
  date: 2025-03-25T10:00:00.000Z 
}

*/