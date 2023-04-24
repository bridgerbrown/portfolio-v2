import Head from "next/head";
import "../styles/styles.css";
import React from "react";


export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta property="og:title" content="Bridger Brown Dev"/>
        <meta property="og:image" content={"/bbdev-meta.jpg"}/>
        <meta property="og:description" content="Hello, my name is Bridger Brown and I am a Front-End Developer and Designer based out of Portland, Oregon."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"/>
      </Head>
     <Component {...pageProps} />
   </div>
  )
}