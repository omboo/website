import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Software that grows with your business."
          />
          <link rel="icon" href="/favicon.svg" />
          <link rel="mask-icon" href="favicon-safari.svg" color="#000000" />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
