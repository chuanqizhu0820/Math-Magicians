import React from 'react';
import renderer from 'react-test-renderer';

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

test('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://chuanqizhu0820.github.io/math-magicians/">Home</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

