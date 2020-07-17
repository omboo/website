import React from 'react';
import PropTypes from 'prop-types';

import styles from './right-trees.module.css';

export default function RightTrees({ className }) {
  return (
    <div className={className}>
      <div className={styles.treesContainer}>
        <img
          className={styles.backTrees}
          src="/right-back-trees.svg"
          alt="Trees"
        />
        <img
          className={styles.frontTree}
          src="/right-front-tree.svg"
          alt="Tree"
        />
      </div>
    </div>
  );
}

RightTrees.propTypes = {
  className: PropTypes.string,
};

RightTrees.defaultProps = {
  className: '',
};
