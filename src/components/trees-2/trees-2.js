import React from 'react';
import PropTypes from 'prop-types';

import trees from './trees.svg';
import styles from './trees-2.module.css';

export default function Trees2({ className }) {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.container}>
        <img className={styles.trees} src={trees} alt="" />
      </div>
    </div>
  );
}

Trees2.propTypes = {
  className: PropTypes.string,
};

Trees2.defaultProps = {
  className: '',
};
