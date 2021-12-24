import BaseHead from "../../components/baseHead";
import Flashcard from "../../components/flashCard";
import Head from "next/head";
import Header from "../../components/header";
import {flashcards} from "../../pages/api/flashcards";
import { useState } from 'react';

const Index = (props) => {
  const defaultCard = {
    en: "hello",
    th: "สวัสดี",
  };
  const [activeCard, setActiveCard] = useState(defaultCard);
  const [activeText, setActiveText] = useState(defaultCard.en);
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);

  const [m, setM] = useState(1);

  const [cardList, setCardList] = useState([]);

  let cardCatsTemp = [];
  Object.keys(flashcards).forEach(i => {
    cardCatsTemp.push({ val: false, text: i});
  });
  const [cardCats, setCardCats] = useState([...cardCatsTemp]);

  const updateCardCats = (event) => {
    const text = event.target.name;
    let shing = [...cardCats];
    shing.forEach(i => {
      if (i.text === text) {
        i.val = !i.val;
      }
    });
    setCardCats(shing);
  };

  const recalculate = () => {
    let shang = [];
    let tempCardCats = [...cardCats].sort( () => .5 - Math.random() );
    tempCardCats.forEach(card => {
      if (card.val) {
        shang.push(...flashcards[card.text].sort( () => .5 - Math.random() ))
      }
    });
    setCardList(shang);

    // apparently I cant use cardList here, so I'm using the temp variable
    if (shang.length) {
      setActiveCard(shang[0]);
      setActiveText(shang[0].en);
      setActiveIndex(1);
      setActiveLeft(false);
      setActiveRight(true);
      setM(shang.length);
    } else {
      setActiveCard(defaultCard);
      setActiveText(defaultCard.en);
      setM(1);
      setActiveLeft(false);
      setActiveRight(false);
      setActiveIndex(1)
    }
  };

  const updateArrows = (index) => {
    if (index === 1) {
      setActiveLeft(false);
    } else {
      setActiveLeft(true);
    }
    if (index === cardList.length) {
      setActiveRight(false);
    } else {
      setActiveRight(true);
    }
  };

  const prevCard = () => {
    if (activeLeft && activeIndex !== 1) {
      const index = activeIndex - 1 - 1;
      setActiveIndex(index + 1);
      setActiveCard(cardList[index]);
      setActiveText(cardList[index].en);
      setActiveRight(true);
    }
  };

  const nextCard = () => {
    if (activeRight && activeIndex !== cardList.length) {
      const index = activeIndex;
      setActiveIndex(index + 1);
      setActiveCard(cardList[index]);
      setActiveText(cardList[index].en);
      setActiveLeft(true);
    }
  };

  const toggle = () => {
    if (activeText === activeCard.en) {
      setActiveText(activeCard.th);
    } else {
      setActiveText(activeCard.en);
    }
  };

  return (
    <>
      <BaseHead />
      <Head>
        <meta property="og:description" content="Thai Flashcasrds - leandronism" />
        <meta property="og:url" content="https://leandronism.com/flashcards"/>
        <meta property="og:title" content="Thai Flashcasrds - leandronism" />
        <meta name="author" content="Leandro De Torres" />
        <link href='https://fonts.googleapis.com/css?family=Nunito:wght@200:300;400' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Noto%20Sans%20JP' rel='stylesheet'/>

        <meta name="twitter:image" content="https://leandronism.com/screenshot.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Thai Flashcasrds - leandronism" />
        <meta name="twitter:title" content="Thai Flashcasrds - leandronism" />
        <meta name="twitter:creator" content={"@9eandro"} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:image" content={`https://leandronism.com${props.src}`} key="ogimage" />

        <meta property="og:type" content="website" />
        <meta name="image" property="og:image:secure_url" content="https://leandronism.com/screenshot.png" />
        <meta name="image" property="og:image" content="https://leandronism.com/screenshot.png" />

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        <title>Thai Flashcards - leandronism</title>
      </Head>
      <Header />
      <div className="w-blog-content-xs sm:w-blog-content-sm md:w-blog-content-md lg:w-blog-content relative mx-auto font-nunito font-200">
        <div className="mx-auto text-center pt-30 pb-30 text-granite-rock">
          {activeIndex} / {m}
        </div>
        <Flashcard
          class="mx-auto"
          en={activeCard.en}
          th={activeCard.th}
          text={activeText}
          activeLeft={activeLeft}
          activeRight={activeRight}
          toggle={toggle}
          prevCard={prevCard}
          nextCard={nextCard}
        />
        <div className="pt-40">
        </div>
        <div className="text-granite-rock pl-10 md:pl-50">
          <div>
            {cardCats.map((i, index) =>
              <div className="flex flex-row text-18 md:text-20">
                <input
                  className={`h-checkbox-sm md:h-checkbox w-checkbox-sm md:w-checkbox text-32 md:text-36 bg-granite-rock mt-4 ${i.val ? 'opacity-50' : 'opacity-50'}`}
                  key={i.text}
                  name={i.text}
                  type="checkbox"
                  onChange={updateCardCats}
                />
                <div className={`capitalize pb-10 align-middle h-32 pl-10 ${i.val ? 'opacity-100' : 'opacity-75'}`}>
                  {i.text}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pl-10 text-18 md:text-20 md:pl-50 pt-20 md:pt-30 text-granite-rock pb-50">
          <div className="cursor-pointer" onClick={recalculate}>Start</div>
        </div>
      </div>
    </>
  )
};

export default Index;
