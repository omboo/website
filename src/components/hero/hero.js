import React from 'react';

import Trees1 from '../trees-1/trees-1';
import Trees2 from '../trees-2/trees-2';
import logo from './logo.svg';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <>
      <section
        className={`${styles.main} flex flex-col w-full justify-center items-center`}
      >
        <img className={styles.heroImage} src={logo} alt="Omboo Logo" />
        <div className={`${styles.titleContainer} pt-1 sm:pt-4`}>
          <h1 className="text-xs md:text-base text-gray font-bold tracking-wide sm:tracking-wider text-center">
            Software that grows with your business
          </h1>
        </div>
      </section>
      <section className={styles.grassContainer}>
        <Trees1 className={styles.trees1} />
        <div className={styles.grassForeground}>
          <Trees2 className={styles.trees2} />
        </div>
      </section>
    </>
  );
}
