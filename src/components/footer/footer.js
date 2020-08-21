import React from 'react';

import trees from './trees.svg';
import bPending from './b-pending.png';
import bPending2x from './b-pending@2x.png';
import bPending3x from './b-pending@3x.png';
import github from './github.png';
import linkedin from './linkedin.svg';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.root}>
      <img className={styles.trees} src={trees} alt="" />
      <div className={styles.socialContainer}>
        <a
          href="https://www.linkedin.com/company/omboo/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-8 mr-4" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/omboo" target="_blank" rel="noreferrer">
          <img className="w-8" src={github} alt="github" />
        </a>
      </div>
      <img
        className={styles.bPending}
        src={bPending}
        srcSet={`${bPending2x} 2x, ${bPending3x} 3x`}
        alt="B Pending Company"
      />
      <h2 className="text-base md:text-5xl font-bold tracking-wide md:tracking-wider">
        hello@omboo.io
      </h2>
    </footer>
  );
}
