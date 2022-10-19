import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
  } from "next/document";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initalProps = await Document.getInitialProps(ctx);
  
      return initalProps;
    }
  
    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"/>
            <link rel="icon" href="/favicon.ico" />
            {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
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