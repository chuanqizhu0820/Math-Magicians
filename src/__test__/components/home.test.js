import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

test('renders correctly', () => {
  const tree = renderer
  /* eslint-disable-next-line */
    .create(<Link page="https://chuanqizhu0820.github.io/math-magicians/">Home</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
