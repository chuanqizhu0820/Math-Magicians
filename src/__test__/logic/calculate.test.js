import calculate from '../../logic/calculate';

test('AC should clear data in obj', () => {
  const obj = { total: '100', next: '100', operation: '+' };
  expect(calculate(obj, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
});
