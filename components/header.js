import Link from 'next/link'
import Image from "next/image";
import Screenshot from "../assets/meta/screenshot.png";

const Header = props => (
  <div className="w-full h-auto pt-30 sticky z-9998 pb-10 px-30 top-header bg-white">
    <div className="text-left max-w-full w-full h-32">
      <div className="relative w-full h-full hidden">
        <Image src={Screenshot} alt="screenshot"
               layout="fill"/>
      </div>
      <div className="font-noto justify-center w-auto mx-auto flex flex-row">
        <div className="flex flex-row justify-center w-auto mx-auto">
          <div className="flex text-20">
            <div className="ml-0 pb-2 font-600 cursor-pointer tracking-2">
              <Link href="/" rel="noreferrer">
                <a>
                  leandronism
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .progress {
        @apply fixed top-0 h-4 z-9999 rounded-full w-footer-icon
      }
    `}</style>
  </div>

);

export default Header;
