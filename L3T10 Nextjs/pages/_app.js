import Layout from "../comps/Layout";
import "../styles/globals.css";
import Script from "next/script";

//Added Google Analytics to App.js as it has all the info for my pages

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-LXBL2JKFTW`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LXBL2JKFTW');
  `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

//REFERENCES
// How To Set Up Google Analytics With Next.JS (Using Next.JS Script Component) https://www.youtube.com/watch?v=QAdtc7VWuNE&list=PLs_G-xtzKfbwB158uKarZRLOS_3M2b3XT
