import getValue, { current } from './calculate';

export function clearValue() {
  document.querySelector('#display').value = '0';
  current[0] = null;
  current[1] = '';
  current[2] = null;
}

export function number(value) {
  document.querySelector('#display').value = value;
  if (current[1] === '') {
    current[0] = value;
  } else {
    current[2] = value;
  }
}

export function operator(operator) {
  document.querySelector('#display').value = operator;
  if (current[2] !== null) {
    getValue();
  }
  current[1] = operator;
}
