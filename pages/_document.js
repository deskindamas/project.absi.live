// import { Html, Head, Main, NextScript } from 'next/document'
 
import Document, { Html, Main, NextScript, Head } from "next/document";

function MyDocument({ locale, ...props }) {

  const dir = locale === "ar" ? "rtl" : "ltr" ;

  return (
    <Html dir={dir} lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, locale: ctx?.locale || "en" };
};

export default MyDocument;

