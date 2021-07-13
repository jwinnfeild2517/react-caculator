export default (Operator, value1, value2) => {
  switch (Operator) {
    case "+":
      return parseInt(value1, 10) + parseInt(value2, 10);
    case "*":
      return parseInt(value1, 10) * parseInt(value2, 10);
    case "-":
      return parseInt(value1, 10) - parseInt(value2, 10);
    case "/":
      return parseInt(value1, 10) / parseInt(value2, 10);
    default:
      return 0;
  }
};
