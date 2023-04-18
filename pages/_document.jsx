import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
        <Head>
            <title>Bridger Brown Dev</title>
            <meta property="og:title" content="Bridger Brown Dev"/>
            <meta property="og:image" content={"/bbdev-meta.jpg"}/>
            <meta property="og:description" content="Hello, my name is Bridger Brown and I am a Front-End Web developer and designer based out of Portland, Oregon."/>
            <link rel="icon" type="image/x-icon" href="/b-favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            <link rel="stylesheet" href="https://use.typekit.net/ugk8hvo.css"/>
            <script src="https://kit.fontawesome.com/86ad898daa.js" crossorigin="anonymous"></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}