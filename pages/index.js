import BaseLayout from '../components/baseLayout';
import Blog from '../components/blog';
import Image from "next/image";
import Left from "../assets/common/chevron_left.png";
import Right from "../assets/common/chevron_right.png";
import {articles} from "../pages/api/articles";

const Index = () => (
  <BaseLayout>
    <div className="">
      <Blog
        link={articles["first-blog"].link}
        available={articles["first-blog"].available}
        date={articles["first-blog"].date}
        src={articles["first-blog"].src}
        title={articles["first-blog"].title}
        subtitle={articles["first-blog"].subtitle}
      />
      <Blog
        link={articles["review-memoria"].link}
        available={articles["review-memoria"].available}
        date={articles["review-memoria"].date}
        src={articles["review-memoria"].src}
        title={articles["review-memoria"].title}
        subtitle={articles["review-memoria"].subtitle}
      />
      <Blog
        link={articles["bkk-2019"].link}
        available={articles["bkk-2019"].available}
        date={articles["bkk-2019"].date}
        src={articles["bkk-2019"].src}
        title={articles["bkk-2019"].title}
        subtitle={articles["bkk-2019"].subtitle}
      />
    </div>
    <div className="mx-auto w-blog-home-xs sm:w-blog-home-sm md:w-blog-home-md lg:w-blog-home flex flex-row pb-20 md:pb-50">
      <div className="h-chevron w-chevron relative opacity-50 ml-auto cursor-pointer mr-16">
        <Image src={Left} alt="left" layout="fill"/>
      </div>
      <div className="h-chevron w-chevron relative opacity-50 mr-auto cursor-pointer ml-16">
        <Image src={Right} alt="right" layout="fill"/>
      </div>
    </div>
  </BaseLayout>
);

export default Index;
