import operate from '../../logic/operate';

test('+ operation should add two numbers', () => {
  const total = '100';
  const next = '100';
  const operation = '+';
  expect(operate(total, next, operation)).toBe('200');
});
