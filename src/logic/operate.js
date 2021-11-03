import { current } from './calculate';

export function clearValue() {
  document.querySelector('#display').value = '0';
  current[0] = 0;
  current[1] = '';
  current[2] = 0;
}

export function getValue() {
  if (current[1] === '+') {
    const value = current[0] + current[2];
    document.querySelector('#display').value = value;
    current[0] = value;
    current[2] = 0;
  }
}
