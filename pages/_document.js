import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          {/* <link rel="apple-touch-icon" sizes="180x180" href="" /> */}
          {/* <link rel="icon" type="image/png" sizes="32x32" href="" /> */}
          {/* <link rel="icon" type="image/png" sizes="16x16" href="" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
