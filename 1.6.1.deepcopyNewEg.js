let car1 = { 
    brand: "Tesla", 
    model: "Model S", 
    specs: { battery: "100 kWh", range: "396 miles" } 
};

let car2 = { ...car1 }; // Shallow copy

car2.specs.battery = "75 kWh"; // Modifying nested object

console.log(car1.specs.battery); // ❌ Output: "75 kWh" (Changed in both)
console.log(car2.specs.battery); // ✅ Output: "75 kWh"

/*
let car1 = { 
    brand: "Tesla", 
    model: "Model S", 
    specs: { battery: "100 kWh", range: "396 miles" } 
};

let car2 = structuredClone(car1); // Deep copy

car2.specs.battery = "75 kWh"; // Modifying copied object

console.log(car1.specs.battery); // ✅ Output: "100 kWh" (Original unchanged)
console.log(car2.specs.battery); // ✅ Output: "75 kWh" (Copied object changed)
*/