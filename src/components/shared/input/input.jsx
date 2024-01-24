import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(({ className, placeholder, type, ...otherProps }, ref) => (
  <input
    className={clsx('outline-none', className)}
    ref={ref}
    placeholder={placeholder}
    type={type}
    {...otherProps}
  />
));

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: null,
};

export default Input;
