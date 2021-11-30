import Head from "next/head";

const BaseHead = props => (
  <>
    <Head>
      <title>leandronism</title>
      <link rel="icon" href="/favicon.png" />
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Nunito:wght@200:300;400' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Athiti' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Nanum Myeongjo' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Noto%20Sans%20JP' rel='stylesheet'/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

      <meta property="og:type" content="website" />
      <meta name="image" property="og:image:secure_url" content="https://leandronism.com/screenshot.png" />
      <meta name="image" property="og:image" content="https://leandronism.com/screenshot.png" />

      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content="leandronism" />
      <meta property="og:image:width" content="852" />
      <meta property="og:image:height" content="545" />
      <meta property="og:description" content="Sawadee, I'm Leandro! Welcome to my site." />
      <meta property="og:url" content="https://leandronism.com" />
      <meta property="og:title" content="leandronism" />

      <meta name="author" content="Leandro De Torres" />

    </Head>
  </>
);

export default BaseHead;
