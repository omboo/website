import React from 'react';

import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className="mt-24 flex justify-between">
      <div className="pl-6 pb-6 flex items-end">
        <a
          href="https://www.linkedin.com/company/omboo/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-8 mr-4" src="/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://github.com/omboo" target="_blank" rel="noreferrer">
          <img className="w-8" src="/github.png" alt="github" />
        </a>
      </div>
      <div>
        <img
          className={`${styles.bPending} pr-6 pb-6`}
          src="/b-pending.png"
          alt="B Pending"
        />
      </div>
    </footer>
  );
}
