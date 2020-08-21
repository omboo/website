import React from 'react';

import blob from './blob.svg';
import illustration from './illustration.svg';
import styles from './software-development.module.css';

export default function SoftwareDevelopment() {
  return (
    <main className="w-full flex items-center justify-center px-10 py-5 md:py-16 lg:py-24">
      <div className="flex flex-col md:flex-row items-end md:items-center max-w-screen-lg">
        <div className="w-full md:w-2/4">
          <div className="pb-3 relative">
            <div className={styles.titleMarker} />
            <h2 className="text-base font-bold">Software Development</h2>
          </div>
          <p className="text-sm text-justify font-hairline">
            We turn your idea into an incremental digital product that will
            rapidly grow into the solution that you need.
          </p>
          <p className="py-5 text-sm text-justify font-medium">Why</p>
          <p className="text-sm text-justify font-hairline">
            Because when you work incrementally, you will use your product
            sooner lowering your Time 2 Market and allowing you to change it’s
            direction if needed.
          </p>
        </div>
        <div className="w-2/4 relative flex items-center justify-end">
          <img className={styles.blob} src={blob} alt="" />
          <img
            className={styles.illustration}
            src={illustration}
            alt="Illustration of a developer using the computer"
          />
        </div>
      </div>
    </main>
  );
}
