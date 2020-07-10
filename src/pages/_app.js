import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import '../styles/index.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Omboo</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

App.defaultProps = {
  pageProps: null,
};
