const current = [0, '', 0];

export function number(value) {
  document.querySelector('#display').value = value;
  if (current[1] === '') {
    current[0] = value;
  } else {
    current[2] = value;
  }
}

export function operator(operator) {
  current[1] = operator;
}

export { current };
