function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;  // ✅ Addition
        case '-':
            return num1 - num2;  // ✅ Subtraction
        case '*':
            return num1 * num2;  // ✅ Multiplication
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero"; // ✅ Division with zero check
        default:
            return "Error: Invalid operator";  // ✅ Handles unknown operators
    }
}

// ✅ Example Usage
console.log(calculator(10, 5, '+')); // Output: 15
console.log(calculator(10, 5, '-')); // Output: 5
console.log(calculator(10, 5, '*')); // Output: 50
console.log(calculator(10, 5, '/')); // Output: 2
console.log(calculator(10, 0, '/')); // Output: "Error: Division by zero"
console.log(calculator(10, 5, '^')); // Output: "Error: Invalid operator"
