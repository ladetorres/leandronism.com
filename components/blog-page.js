import BaseHead from "./baseHead";
import Image from "next/image";
import Head from "next/head";
import Header from "./header";
import Left from "../assets/common/chevron_left.png";
import Link from 'next/link'
import Footer from "./footer";

const BlogPage = props => (
  <>
    <BaseHead />
    <Head>
      <meta property="og:description" content={`${props.subtitle}`} />
      <meta property="og:url" content={`https://leandronism.com${props.url}`}/>
      <meta property="og:title" content={`${props.head}`} />
      <meta name="author" content="Leandro De Torres" />
      <link href='https://fonts.googleapis.com/css?family=Nunito:wght@200:300;400' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Noto%20Sans%20JP' rel='stylesheet'/>

      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={"@9eandro"} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:image" content={props.src} key="ogimage" />

      <meta property="og:type" content="website" />
      <meta name="image" property="og:image:secure_url" content={props.src} />
      <meta name="image" property="og:image" content={props.src} />

      <title>{props.head}</title>
    </Head>
    <Header />
    <div className="h-blog-page h-blog-page-xs sm:h-blog-page-sm md:h-blog-page-sm lg:h-blog-page w-blog-page-xs sm:w-blog-page-sm md:w-blog-page-md lg:w-blog-page relative mx-auto">
      <Image src={props.src} alt="medium" layout="fill"
             objectFit="cover"/>
    </div>
    <div className="w-blog-content-xs sm:w-blog-content-sm md:w-blog-content-md lg:w-blog-content relative mx-auto font-nunito font-200">
      {/*<div className="md:w-blog-credits-md lg:w-blog-credits">*/}
      {/*</div>*/}
      <div>
        <div className="text-14 pt-10">
          <Link href="/" rel="noreferrer" as={ process.env.BACKEND_URL + ""}>
            <div className="ml-neg-8 h-chevron w-chevron relative opacity-50 cursor-pointer">
              <Image src={Left} alt="left" layout="fill"/>
            </div>
          </Link>
        </div>
        <div className="text-24 pt-10 pb-2">
          {props.title}
        </div>
        <div className="text-12 pt-2 pb-20 text-granite-rock">
          {props.date}
        </div>
        <div className=" text-granite-rock pb-40 md:pb-50">
          {props.children}
        </div>

        <div className="text-12 text-granite-rock">
          Photo by{" "}
          <a href={`${props.photoCreditLink}`} className="underline">{props.photoCredit}</a>
          {" "}on{" "}
          <a href="https://unsplash.com/s/photos/laptop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">Unsplash</a>
        </div>
      </div>
    </div>
    <div className="pt-30">
      <Footer />

    </div>
  </>

);

export default BlogPage;
