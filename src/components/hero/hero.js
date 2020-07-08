import React from 'react';

import styles from './hero.module.css';

export default function Hero() {
  return (
    <main
      className={`${styles.main} flex flex-col w-full justify-center items-center`}
    >
      <img className={styles.heroImage} src="logo.svg" alt="Omboo Logo" />
      <div className={`${styles.titleContainer} pt-1 md:pt-4`}>
        <h1 className="text-xs md:text-base font-bold tracking-wide md:tracking-wider text-center">
          Software that grows with your business
        </h1>
      </div>
    </main>
  );
}
