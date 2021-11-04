const operate = (first, second, operator) => {
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
};

export default operate;
