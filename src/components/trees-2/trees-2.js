import React from 'react';
import PropTypes from 'prop-types';

import tree3 from './tree-3.svg';
import tree4 from './tree-4.svg';
import styles from './trees-2.module.css';

export default function Trees2({ className }) {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.container}>
        <img className={styles.backTree} src={tree4} alt="" />
        <img className={styles.frontTree} src={tree3} alt="" />
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
