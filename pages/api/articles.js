
import Laptop from "../../assets/blogs/laptop.jpg";
import Memoria from "../../assets/blogs/memoria-3.jpg";
import Bkk from "../../assets/blogs/bkk-6.jpeg";

const articles = {
    "first-blog": {
      head: "First Blog! - leandronism",
      title: "First Blog!",
      subtitle: "Took me seven days rewriting my website. If anyone's interested (I hope no one is), here's wth happened.",
      link: "/first-blog",
      available: true,
      date: "Nov 29, 2021",
      src: Laptop,
      photoCredit: "Leone Venter",
      photoCreditLink: "https://unsplash.com/@fempreneurstyledstock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
    "review-memoria": {
      head: "Memoria - leandronism",
      title: "Review: Memoria, 2021",
      subtitle: "",
      link: "/review-memoria",
      available: false,
      date: "",
      src: Memoria,
  },
    "bkk-2019": {
      head: "Bangkok 2019 - leandronism",
      title: "Photo Dump: Bangkok 2019",
      subtitle: "",
      link: "/bkk-2019",
      available: false,
      date: "",
      src: Bkk,
  },
};

export {
  articles,
}
