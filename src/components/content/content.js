import React from 'react';

import LeftTrees from '../left-trees/left-trees';
import RightTrees from '../right-trees/right-trees';
import styles from './content.module.css';

export default function Content() {
  return (
    <section className="w-full">
      <div className={styles.topSection}>
        <img
          src="/foreground-grass-top.svg"
          className={styles.foregroundGrassTop}
          alt=""
        />
        <div className={styles.treesContainer}>
          <LeftTrees className={styles.leftTrees} />
          <RightTrees className={styles.rightTrees} />
        </div>
      </div>
      <div className={`${styles.bottomSection} relative flex justify-center`}>
        <h2 className="text-2xl md:text-5xl font-bold tracking-wide md:tracking-wider sm:pt-8">
          hello@omboo.io
        </h2>
        <img
          src="/foreground-grass-bottom.svg"
          className={styles.foregroundGrassBottom}
          alt=""
        />
      </div>
    </section>
  );
}
