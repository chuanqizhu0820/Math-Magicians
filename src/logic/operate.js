export default function operate(first, second, operator) {
  if (operator === '+') {
    return (parseFloat(first) + parseFloat(second)).toString();
  }
  if (operator === '-') {
    return (parseFloat(first) - parseFloat(second)).toString();
  }
  if (operator === '*') {
    return (parseFloat(first) * parseFloat(second)).toString();
  }
  if (operator === '/') {
    return (parseFloat(first) / parseFloat(second)).toString();
  }
  return 0;
}
