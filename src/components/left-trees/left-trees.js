import React from 'react';
import PropTypes from 'prop-types';

import styles from './left-trees.module.css';

export default function LeftTrees({ className }) {
  return (
    <div className={className}>
      <div className={styles.treesContainer}>
        <img className={styles.backTree} src="/left-back-tree.svg" alt="Tree" />
        <img
          className={styles.frontTrees}
          src="/left-front-trees.svg"
          alt="Trees"
        />
      </div>
    </div>
  );
}

LeftTrees.propTypes = {
  className: PropTypes.string,
};

LeftTrees.defaultProps = {
  className: '',
};
