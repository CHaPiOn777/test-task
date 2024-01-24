import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import Check from 'svgs/check.svg';
import Cross from 'svgs/cross.svg';
import Loader from 'svgs/loader.svg';

const styles = {
  base: 'flex items-center justify-center w-12 h-12 leading-none text-center whitespace-nowrap rounded-large select-none',
  theme: {
    'primary-green': 'bg-primary-green',
    'primary-pink': 'bg-primary-pink',
    'primary-blue': 'bg-primary-blue',
  },
  animation: 'animate-spin',
  content: {
    check: Check,
    cross: Cross,
    loading: Loader,
  },
};

const InfoIcon = ({ className, theme, content, animation }) => (
  <div className={clsx(styles.base, styles.theme[theme], className)}>
    <Image
      className={clsx(animation ? styles.animation : '')}
      src={styles.content[content]}
      width={48}
      height={48}
      alt=""
    />
  </div>
);

InfoIcon.propTypes = {
  className: PropTypes.string,
  animation: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  content: PropTypes.oneOf(Object.keys(styles.content)).isRequired,
};
export default InfoIcon;
