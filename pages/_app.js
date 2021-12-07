// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);
  return <Component {...pageProps} />
}

export default MyApp

// if (typeof window === 'object') {
// // Check if document is finally loaded
//   let body = document.body,
//     html = document.documentElement;
//
//   let prog = document.getElementById('progress');
//   const setProgress = () => {
//     var winScroll = body.scrollTop || html.scrollTop;
//     var height = html.scrollHeight - html.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     if (scrolled > 8) {
//       prog.style.width = scrolled + "%";
//     } else {
//       // prog.style.width = 0 + "%";
//     }
//   };
//
//   window.addEventListener('scroll', setProgress, {passive: true});
//
//   setProgress();
//
// }
