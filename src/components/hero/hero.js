import React from 'react';

import styles from './hero.module.css';

export default function Hero() {
  return (
    <main
      className={`${styles.main} flex flex-col w-full justify-center items-center`}
    >
      <img className={styles.heroImage} src="logo.svg" alt="Omboo Logo" />
      <div className={`${styles.titleContainer} pt-1 sm:pt-4`}>
        <h1 className="text-xs md:text-base text-gray font-bold tracking-wide sm:tracking-wider text-center">
          Software that grows with your business
        </h1>
      </div>
    </main>
  );
}
