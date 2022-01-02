import Head from "next/head";

const BaseHead = props => (
  <>
    <Head>
      <title>{ props.title }</title>
      <link rel="icon" href="/favicon.png" />
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Nunito:wght@200:300;400' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Athiti' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Nanum Myeongjo' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Noto%20Sans%20JP' rel='stylesheet'/>

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      <meta property="og:type" content="website" />
      <meta name="image" property="og:image:secure_url" content={props.image} />
      <meta name="image" property="og:image" content={props.image} />

      <meta name="twitter:image" content={props.image} key="twcard" />
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:title" content={`${props.title}`} />
      <meta name="twitter:creator" content={"@9eandro"} key="twhandle" />
      <meta name="twitter:description" content={props.description} />

      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content="leandronism" />
      <meta property="og:image:width" content="852" />
      <meta property="og:image:height" content="545" />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />

      <meta property="description" content={props.description} />
      <meta property="og:keywords" content="leandro, leandronism, leandro de torres" />
      <meta property="keywords" content="leandro, leandronism, leandro de torres" />

      <meta name="author" content="Leandro De Torres" />

      <meta name="twitter:creator" content={"@9eandro"} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:image" content={props.url} key="ogimage" />

      {/*SEO*/}
      <meta property="og:site_name" name="og:site_name" content="leandronism" />
    </Head>
  </>
);

export default BaseHead;
