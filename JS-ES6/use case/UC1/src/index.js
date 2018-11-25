function Calculator(...args) {
  if (!args) {
    return;
  }
  if (args.length < 3) {
    return "Invalid Operation. Insufficient params supplied";
  }

  const firstOperand = parseFloat(args[0]);
  const operator = args[1];
  const secondOperand = parseFloat(args[2]);

  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    return "Invalid Operands. Please input numbers only.";
  }
  let result = 0;
  let isOperatorValid = true;
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    case "%":
      result = firstOperand % secondOperand;
      break;

    default:
      isOperatorValid = false;
      break;
  }

  if (!isOperatorValid) {
    return "Invalid Operator.";
  }
  return result;
}

console.log(Calculator(2, "+", 3)); // result should be 5
console.log(Calculator(2, "-", 3)); // result should be -1
console.log(Calculator(2, "*", 3)); // result should be 6
console.log(Calculator(2, "/", 3)); // result should be 0.66666
console.log(Calculator(2, "/", 0)); // result should be Infinity
