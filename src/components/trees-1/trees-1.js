import React from 'react';
import PropTypes from 'prop-types';

import tree1 from './tree-1.svg';
import tree2 from './tree-2.svg';
import styles from './trees-1.module.css';

export default function Trees1({ className }) {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.container}>
        <img className={styles.backTree} src={tree2} alt="" />
        <img className={styles.frontTree} src={tree1} alt="" />
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
