import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  base: 'flex items-center rounded-large leading-4 text-base font-semibold px-9 md:px-4 whitespace-nowrap duration-200 transition-colors',
  size: {
    md: 'h-12',
    sm: 'h-11',
  },
  theme: {
    'primary-blue-outline':
      'bg-primary-blue/20 border border-primary-blue tracking-tight-8 hover:bg-primary-blue/50',
    'primary-blue-filled': 'bg-primary-blue border border-transparent hover:bg-secondary-blue',
  },
};

const Button = ({ className = null, to = null, size, theme, children, ...otherProps }) => {
  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className)}
      to={to}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
