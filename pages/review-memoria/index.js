import BlogPage from '../../components/blog-page';
import {articles} from "../../pages/api/articles";

const FirstBlog = () => (
  <BlogPage
    src={articles["review-memoria"].src}
    head={articles["review-memoria"].head}
    date={articles["review-memoria"].date}
    title={articles["review-memoria"].title}
    subtitle={articles["review-memoria"].subtitle}
    url={articles["review-memoria"].link}
    photoCreditString={articles["review-memoria"].photoCreditString}
    movieDir={articles["review-memoria"].movieDir}
    movieRating={articles["review-memoria"].movieRating}
    movieRt={articles["review-memoria"].movieRt}
    movieI={articles["review-memoria"].movieI}
    movieL={articles["review-memoria"].movieL}
    movieM={articles["review-memoria"].movieM}
    movieTrailer={articles["review-memoria"].movieTrailer}
  >
    <div className="text-14 sm:text-16">
      <div className="pt-30 pb-8"/>
      <div className="py-8"/>
      I was exiting during the credits when I overheard two friends whispering
      in front of
      me, &quot;Did you like it? Or are you pissed off, too?&quot;

      <div className="py-8"/>
      If only they could see the grin behind my mask.

      <div className="py-8"/>
      I have no strong expectations stepping in the cinema
      (yep my first time since I saw Once Upon a Time in... Hollywood last year)
      other than &quot;surprise
      me!&quot;. I anticipated a laid-back divisive batcrap,
      immersive cinematography,
      no solid nor straightforward plot,
      and a bunch of lingering wide frame still shots of casual
      conversations and nothing
      substantial happening.

      <div className="py-8"/>
      There&apos;s a foreboding sense of alienation in how Joe (the director&apos;s
      nickame) frames the interior shots against open windows peeking to
      the rural landscape of Medellín, Colombia. The wide sliding
      windows in the doctor&apos;s room, the floor-to-ceiling window wall panels
      in the archaeologist&apos;s office,
      and the long takes inside Old Hernan&apos;s
      house with the open casement windows, all swallow
      the interior, exposing a rural and tropical backdrop and
      filling up the space with natural light,
      alienating the actors and the human activities
      and treating them as out-of-place trespassers in nature, suggesting a
      theme of an intruding stranger&apos;s experience in a foreign place.

      <div className="py-8"/>
      Maybe this is what the film is about. Jessica is a foreigner in the film,
      still an outsider despite being able to communicate with
      her elementary-level Spanish, a constant onlooker and
      a listener of the world around her. Memoria, too, is in itself
      drawn from Joe&apos;s first-hand experience creating it in a country outside
      his own.
      All of his previous films were rooted around Thai ideology and
      experiences, all set in Thailand,
      and his take on being an outsider in Colombia is engraved
      in Jessica&apos;s own curiosity of the sound she&apos;s been hearing.

      <div className="py-8"/>
      Memoria is an enigmatic experience- a slow, immersive rumination on
      our collective memory to the sounds of the past.

      {/*<div className="py-8"/>*/}
      {/*At some point halfway through, there's a dinner table scene where Jessica*/}
      {/*is with her sister's family when she started hearing the 'bang' again,*/}
      {/*but no else in the table seemed to hear it.*/}
      {/*She is obviously startled, but she keeps her composure as the conversation*/}
      {/*went on and the 'bang' is heard twice more.*/}
      {/*It was a tense and existential sequence, essentially horror*/}
      {/*at its core, and it stood out to me.*/}

      <div className="py-8"/>
      The entire film is a genius flex in impeccable sound design, and I now
      understand why this film would only ever be available for cinema
      screenings.
    </div>
  </BlogPage>
);

export default FirstBlog
