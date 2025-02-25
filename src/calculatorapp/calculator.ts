function calculator(num1: number, num2: number, operation: string): number | string {
    switch (operation.toLowerCase()) {
        case 'add':
        case '+':
            return num1 + num2;
        case 'subtract':
        case '-':
            return num1 - num2;
        case 'multiply':
        case '*':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return "Error: Invalid operation. Use 'add', 'subtract', 'multiply', 'divide', '+', '-', '*', or '/'";
    }
}

// Example usage:
console.log(calculator(10, 5, 'add'));      
console.log(calculator(10, 5, 'subtract')); 
console.log(calculator(10, 5, 'multiply')); 
console.log(calculator(10, 5, 'divide'));   
console.log(calculator(10, 0, '/'));        
console.log(calculator(10, 5, 'mod'));      