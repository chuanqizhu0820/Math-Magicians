import React from 'react';
import PropTypes from 'prop-types';

export default function Link(props) {
  const { page = '', children = '' } = props;
  return <a href={page}>{children}</a>;
}

Link.defaultProps = {
  page: null,
  children: null,
};

Link.propTypes = {
  page: PropTypes.string,
  children: PropTypes.string,
};
