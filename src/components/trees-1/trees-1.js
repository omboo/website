import React from 'react';
import PropTypes from 'prop-types';

import trees from './trees.svg';
import styles from './trees-1.module.css';

export default function Trees1({ className }) {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.container}>
        <img className={styles.trees} src={trees} alt="" />
      </div>
    </div>
  );
}

Trees1.propTypes = {
  className: PropTypes.string,
};

Trees1.defaultProps = {
  className: '',
};
