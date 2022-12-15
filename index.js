const add = (...numbers) => numbers.reduce((total, num) => total + num);
const subtract = (a, b) => a - b;
const multiply = (...numbers) => numbers.reduce((total, num) => total * num);
const divide = (a, b) => a / b;
const relTag = "v1.3.0"

export {
  add,
  subtract,
  multiply,
  divide,
  relTag
};