
import Laptop from "../../assets/blogs/laptop.jpg";
import Memoria from "../../assets/blogs/memoria-3.jpg";
import Bkk from "../../assets/blogs/bkk-6.jpeg";

const articles = {
    "first-blog": {
      head: "First Blog! - leandronism",
      title: "First Blog (Leandro's Version) (From the Vault)",
      subtitle: "Took me seven days rewriting the website I didn't touch in six months. If anyone's interested (I honestly hope no one is), here's wth happened.",
      link: "/first-blog",
      available: true,
      date: "Nov 29, 2021",
      src: Laptop,
      photoCredit: "Leone Venter",
      photoCreditLink: "https://unsplash.com/@fempreneurstyledstock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
    "review-memoria": {
      head: "Memoria, 2019 - leandronism",
      title: "Not a Review: Memoria, 2021",
      subtitle: "First movie in the cinemas after almost two years! Beautifully bonkers, crazy contemplative cinema from Apichatpong Weerasethakul. No spoilers here, ssh.",
      link: "/review-memoria",
      available: true,
      date: "Dec 5, 2021",
      src: Memoria,
      movieRating: 10,
      movieDir: "Apichatpong Weerasethakul",
      movieRt: "https://www.rottentomatoes.com/m/memoria_2021",
      movieI: "https://www.imdb.com/title/tt8399288/",
      movieL: "https://letterboxd.com/film/memoria-2021/",
      movieM: "https://www.metacritic.com/movie/memoria-2020",
      movieTrailer: "https://youtu.be/PDU6B93ltds",
      photoCreditString: "Note: I honestly don't know who to credit movie posters to. My bad. I'll figure this out.",
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
