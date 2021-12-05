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

      <meta name="twitter:image" content={`https://leandronism.com${props.src.src}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={`${props.subtitle}`} />
      <meta name="twitter:title" content={`${props.head}`} />
      <meta name="twitter:creator" content={"@9eandro"} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:image" content={`https://leandronism.com${props.src.src}`} key="ogimage" />

      <meta property="og:type" content="website" />
      <meta name="image" property="og:image:secure_url" content={`https://leandronism.com${props.src.src}`} />
      <meta name="image" property="og:image" content={`https://leandronism.com${props.src.src}`} />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

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
        <div className="text-20 md:text-24 pt-10 pb-2">
          {props.title}
        </div>
        <div className="text-12 pt-2 pb-20 text-granite-rock">
          {props.date}
        </div>
        <div className={props.movieDir ? "text-12 text-granite-rock pb-10" : "hidden"}>
          Dir. {props.movieDir}
        </div>
        <div className="flex flex-row text-12 text-granite-rock pt-2 pb-10">
          <div className={props.movieI ? "block pr-10" : "hidden"}>
            <a href={`${props.movieI}`} className="text-blue-link" target="_blank" rel="noreferrer">
              IMDB
            </a>
          </div>
          <div className={props.movieL ? "block pr-10" : "hidden"}>
            <a href={`${props.movieL}`} className="text-blue-link" target="_blank" rel="noreferrer">
              Letterboxd
            </a>
          </div>
          <div className={props.movieRt ? "block pr-10" : "hidden"}>
            <a href={`${props.movieRt}`} className="text-blue-link" target="_blank" rel="noreferrer">
              RT
            </a>
          </div>
          <div className={props.movieM ? "block pr-10" : "hidden"}>
            <a href={`${props.movieM}`} className="text-blue-link" target="_blank" rel="noreferrer">
              Metacritic
            </a>
          </div>
          <div className={props.movieTrailer ? "hidden md:block text-12 text-granite-rock block pr-10 pl-30" : "hidden"}>
            <a href={`${props.movieTrailer}`} className="text-blue-link" target="_blank" rel="noreferrer">
              Trailer
            </a>
          </div>
        </div>
        <div className={props.movieTrailer ? "block md:hidden text-12 text-granite-rock block" : "hidden"}>
          <a href={`${props.movieTrailer}`} className="text-blue-link" target="_blank" rel="noreferrer">
            Trailer
          </a>
        </div>

        <div className=" text-granite-rock pb-20">
          {props.children}
        </div>

        <div className={props.movieRating ? "flex flex-row pb-30 md:pb-40" : "hidden"}>
          {Array(Math.floor((props.movieRating || 0) / 2)).fill(0).map((item)=>{
            return <i className="material-icons" key={`${item}`}>star</i>
          })}
          <i className={(props.movieRating || 0) % 2 === 1 ? "material-icons" : "hidden"}>star_half</i>
          {Array(Math.floor((10 - (props.movieRating || 0)) / 2)).fill(0).map((item)=>{
            return <i className="material-icons" key={`${item}`}>star_border</i>
          })}
        </div>
        <div className={!props.movieRating ? "pb-20 md:pb-30" : "hidden"} />

        <div className={props.photoCreditString ? "hidden" : "text-12 text-granite-rock"}>
          Photo by{" "}
          <a href={`${props.photoCreditLink}`} className="underline">{props.photoCredit}</a>
          {" "}on{" "}
          <a href="https://unsplash.com/s/photos/laptop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">Unsplash</a>
        </div>
        <div className={props.photoCreditString ? "text-12 text-granite-rock" : "hidden"}>
          {props.photoCreditString}
        </div>
      </div>
    </div>
    <div className="pt-30 pb-40 md:pb-50">
      {/*<Footer />*/}

    </div>
  </>

);

export default BlogPage;
