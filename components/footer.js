import Image from "next/image";
import Medium from '../assets/socmed/medium.svg'
import Boxd from '../assets/socmed/boxd.svg'
import LinkedIn from '../assets/socmed/in.svg'
import Twt from '../assets/socmed/twt.svg'
import Ig from '../assets/socmed/ig.svg'

const Footer = props => (
  <div className="w-full pt-40 h-70">
    <div className="flex flex-row content-center h-full w-full justify-center h-70">
      <div className="justify-end flex flex-row px-20">
        <div className="mx-6 h-32 w-32 ">
          <a href="https://medium.com/@leandronism" target="_blank" rel="noreferrer">
            <div className="h-footer-icon w-footer-icon relative">
              <Image src={Medium} alt="medium"
                     layout="fill"/>
            </div>
          </a>
        </div>
        <div className="mx-6">
          <a href="https://letterboxd.com/9eandronism/" target="_blank" rel="noreferrer">
            <div className="h-footer-icon w-footer-icon relative">
              <Image src={Boxd} alt="letterboxd"
                     layout="fill"/>
            </div>
          </a>
        </div>
        <div className="mx-6">
          <a href="https://www.linkedin.com/in/leandro-de-torres/"
             target="_blank" rel="noreferrer">
            <div className="h-footer-icon w-footer-icon relative">
              <Image src={LinkedIn} alt="linkedin"
                     layout="fill"/>
            </div>
          </a>
        </div>
        <div className="mx-6">
          <a href="https://twitter.com/9eandro/" target="_blank" rel="noreferrer">
            <div className="h-footer-icon w-footer-icon relative">
              <Image src={Twt} alt="twitter"
                     layout="fill"/>
            </div>
          </a>
        </div>
        <div className="mx-6">
          <a href="https://www.instagram.com/leandroadetorres/"
             target="_blank" rel="noreferrer">
            <div className="h-footer-icon w-footer-icon relative">
              <Image src={Ig} alt="ig"
                     layout="fill"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
