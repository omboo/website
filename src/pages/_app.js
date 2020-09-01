import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import _ from 'lodash';

import '../styles/index.css';

export default function App({ Component, pageProps }) {
  console.log(_);
  return (
    <>
      <Head>
        <title>Omboo</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
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
