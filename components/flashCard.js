import Left from "../assets/common/chevron_left.png";
import Right from "../assets/common/chevron_right.png";
import Image from "next/image";
import { useState } from 'react';

const Flashcard = props => {
  return (
    <div className="">
      <div className="mx-auto flex flex-row">
        <div className="my-auto hidden sm:block ml-auto">
          <div
            className={`h-chevron w-chevron relative opacity-50 ml-auto mr-16 ${props.activeLeft ? 'cursor-pointer' : ''}`}
            onClick={props.prevCard}
          >
            <Image src={Left} alt="left" layout="fill"/>
          </div>
        </div>
        <div
          className="h-card-xs sm:h-card-sm md:h-card-md lg:h-card w-card-xs sm:w-card-sm md:w-card-md lg:w-card border-0 border-burnt-coral-dark rounded-lg cursor-pointer mx-auto sm:mx-16 flex"
        >
          <div
            className="block text-center w-full flex flex-row"
            onClick={props.toggle}
          >
            <div className="my-auto mx-auto">
              <div className="text-40 md:text-48 text-granite-rock">
                {/*{displayText ? props.th : props.en}*/}
                {props.text}
              </div>
            </div>
          </div>
        </div>
        <div className="my-auto hidden sm:block mr-auto">
          <div
            className={`h-chevron w-chevron relative opacity-50 mr-auto ml-16 ${props.activeRight ? 'cursor-pointer' : ''}`}
            onClick={props.nextCard}
          >
            <Image src={Right} alt="right" layout="fill"/>
          </div>
        </div>
      </div>
      <div className="block sm:hidden pt-30">
        <div
          className="mx-auto w-blog-home-xs sm:w-blog-home-sm md:w-blog-home-md lg:w-blog-home flex flex-row pb-20 md:pb-50"
        >
          <div
            className={`h-chevron w-chevron relative opacity-50 ml-auto mr-16 ${props.activeLeft ? 'cursor-pointer' : ''}`}
            onClick={props.prevCard}
          >
            <Image src={Left} alt="left" layout="fill"/>
          </div>
          <div
            className={`h-chevron w-chevron relative opacity-50 mr-auto ml-16 ${props.activeRight ? 'cursor-pointer' : ''}`}
            onClick={props.nextCard}
          >
            <Image src={Right} alt="right" layout="fill"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Flashcard;
