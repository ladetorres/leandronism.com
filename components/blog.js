import Image from "next/image";
import Link from 'next/link'

const Blog = props => (
  <div className="mx-auto w-blog-home-xs sm:w-blog-home-sm md:w-blog-home-md lg:w-blog-home my-50 font-nunito">
    <Link href={props.available ? `${props.link}` : "" } rel="noreferrer" scroll={false}  as={ process.env.BACKEND_URL + props.available ? `${props.link}` : ""}>
      <div className={ props.available ? "cursor-pointer" : "" }>
        <div>
          <div className="h-blog-xs sm:h-blog-sm md:h-blog-sm lg:h-blog w-blog-xs sm:w-blog-sm md:w-blog-md lg:w-blog relative mx-auto">
            <Image src={props.src} alt="medium" layout="fill"
                   objectFit="cover"/>
          </div>
        </div>
        <div>
          <div className="text-18 text-left pt-16">
            { props.title }
          </div>
        </div>
      </div>
    </Link>
    <div>
      <div>
        <div
            className="text-10 font-200 md:text-12 text-left pb-10"
            style={{ display: props.available ? "block" : "none" }}
        >
          { props.date }
        </div>
        <div
            className="text-14 text-left font-200"
            style={{ display: props.available ? "block" : "none" }}
        >
          { props.subtitle }
        </div>
        <div
            style={{ display: props.available ? "none" : "block" }}
            className="text-left text-12"
        >
          Coming soon!
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
