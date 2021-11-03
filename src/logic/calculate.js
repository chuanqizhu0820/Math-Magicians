const current = [null, '', null];

export default function getValue() {
  let value;
  if (current[1] === '+') {
    value = current[0] + current[2];
  } else if (current[1] === '*') {
    value = current[0] * current[2];
  }
  document.querySelector('#display').value = value;
  current[0] = value;
  current[2] = null;
}

export { current };
