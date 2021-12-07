import BlogPage from '../../components/blog-page';
import {articles} from "../../pages/api/articles";

const FirstBlog = () => (
  <BlogPage
      src={articles["first-blog"].src}
      head={articles["first-blog"].head}
      date={articles["first-blog"].date}
      title={articles["first-blog"].title}
      subtitle={articles["first-blog"].subtitle}
      url={articles["first-blog"].link}
      photoCredit={articles["first-blog"].photoCredit}
      photoCreditLink={articles["first-blog"].photoCreditLink}
  >
    <div className="text-14 sm:text-16">
      <div className="pt-30 pb-8"/>
      <span className="text-16 sm:text-18 uppercase">
        Tuesday
      </span>
      <div className="py-8"/>
      Holy crap do I need a rewrite.

      <div className="py-8"/>
      Safe to assume I probably haven&apos;t been using 11ty properly anyway,
      it&apos;s time to redo this whole disaster of a personal
      site using another framework.

      <div className="py-8"/>
      Besides, plain CSS doesn&apos;t really scream, &quot;Well yes I have
      two years of frontend
      experience!&quot; (a late realization, yes, my bad),
      so redoing all this makes sense.

      <div className="pt-30 pb-8"/>
      <span className="text-16 sm:text-18 uppercase">
        Wednesday
      </span>
      <div className="py-8"/>
      A quick Google search tells me that GatsbyJS is the best alternative for
      building static sites
      quickly, but for reasons I&apos;m legally obligated not to say,
      I gonna skip that.

      <div className="py-8"/>
      Big whoop. Anyway.

      <div className="py-8"/>
      Fade in music, cue drumroll, enter{' '}
      <a href={"https://nextjs.org/"}
         className="underline"
         rel="noreferrer"
         target="_blank">
        Next.js
      </a>.

      <div className="py-8"/>
      A little intimidating to use Next since apparently it&apos;s on
      top of React and I have
      zero React experience,
      but going with my default response to learning
      new skills I say sure, why not. I can try.

      <div className="py-8"/>
      To be fair React is the most common
      required skill I&apos;ve seen on job descriptions, along with Node,
      and this alone
      is more than enough reason for me to try it.

      <div className="py-8"/>
      One week of half-assed crash course I go!

      <div className="pt-30 pb-8"/>
      <span className="text-16 sm:text-18 uppercase">
        Thursday
      </span>

      <div className="py-8"/>
      Okay. Next is appreciatedly intuitive, <strike>very</strike> a little
      like Vue (honestly beyond
      all the fastest, best-performance bullcrap benefits of choosing any
      and all them JS frameworks,
      they really feel like the same, especially in the context of
      simple static sites like mine), but it&apos;s
      always worth learning a different XXX.js if you want to land a
      developer job, so err yeah, sure.

      <div className="pt-30 pb-8"/>
      <span className="text-16 sm:text-18 uppercase">
        Friday
      </span>

      <div className="py-8"/>
      I&apos;ve been setting up Next on my local machine, made things
      work after at least fifteen embarassing Google searches of shite like
      {' '}<i>how next js image</i> and <i>how next js link</i>.

      <div className="py-8"/>
      A related note of me using Tailwind because.. no reason. Sounds
      fancy, and I&apos;m already familiar with it. Also, implementing
      responsive UI is
      more dumb-dev-friendly using Tailwind, so it&apos;s
      basically my best friend.

      <div className="py-8"/>
      And Google says Tailwind CSS is the number 1 blah blah in ranking
      if you ask it{" "}
      <i>css frameworks 2021</i>. Okay. Noted. Whatever you say sir.

      <div className="pt-30 pb-8"/>
      <span className="text-16 sm:text-18 uppercase">
        Friday night
      </span>

      <div className="py-8"/>
      <strike>I think Tailwind is repetitive in typing the class names, but a
        counter point would mention that
        if one is repeating too many long tailwind class names, then
        maybe a refactor is needed in the code, so maybe my code
        is bad and so I&apos;ll pretend I never brought this up.</strike>

      <div className="py-8"/>
      So yeah idk Tailwind GOAT Tailwind you rock Bootstrap Bulma yall suck.

      <div className="pt-30 pb-8"/>

      <span className="text-16 sm:text-18 uppercase">
        Saturday{" "}
      </span>
      <span className="text-16 sm:text-18">
        (damn it&apos;s saturday already)
      </span>
      <div className="py-8"/>
      It is actually fun.
      I enjoy the bits where I go back to CSS basics (Alexa, how
      do you center a div?),
      but the moment something works out is always worth
      the entire morning lost. I only learned the basics of Next, Imma learn
      in-depth some other time (read: never).

      <div className="py-8"/>
      I&apos;ve written the home page,
      and now I&apos;m writing this
      sample blog I hope my future employers would never, ever see.

      <div className="pt-30 pb-8"/>
      <span className="text-16 sm:text-18 uppercase">
        Sunday
      </span>

      <div className="py-8"/>
      Okay, pages are done, fun&apos;s over, gotta get this up and
      running on GitHub pages. Code is
      still messy, but eh.

      <div className="py-8"/>
      Next is pretty nice.
      I only get to appreciate til today, and though I don&apos;t
      feel a lot of the difference with Vue,
      except for the syntax and overall how I need to do things, it&apos;s
      refreshing trying something new.

      <div className="pt-30 pb-8"/>
      <span className="text-16 sm:text-18 uppercase">
        Sunday night
      </span>{" "}
      <span className="text-16 sm:text-18">
        and please let me deploy it tonighttfsfdghjk
      </span>
      <div className="py-8"/>
      Deploying to GitHub pages is a beeyatch.

      <div className="py-8"/>
      As a person who doesn&apos;t really
      understand things, my entire career&apos;s existence depends on these
      anonymous nerd angels who write how to do and fix things online.

      <div className="py-8"/>
      Also, fixing dependency node version issues suck. When God created the
      universe in a single-week sprint I sincerly swear He didn&apos;t imagine
      His most intelligent creations wasting 46 minutes trying to properly
      address
      <div className="py-8"/>
      <code>The engine &quot;node&quot; is incompatible with this module.
      Expected version
      "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7</code>

      <div className="py-8"/>
      Maybe I am not one of His most intelligent creations after all. Smh

      <div className="pt-30 pb-8"/>
      <span className="text-16 sm:text-18 uppercase">
        Monday
      </span>{" "}
      <span className="text-16 sm:text-18">
         dude come on deploy this
      </span>

      <div className="py-8"/>
      As some scarf-wearing genius once said, {" "}
      <a href="https://genius.com/24418686" rel="noreferrer"
         className="underline">
        said
      </a>,
      &quot;...And here we are again /
      in the middle of the night / &quot; but unlike her dancing in the kitchen,
      I&apos;m hunched over my laptop at 2AM
      struggling how to deploy a site no one
      would really give two cents about.
      <div className="py-8"/>
      Took me one hour to commit my changes, figure out deployment
      and fix <i>next out</i> and <i>npm run deploy</i>.

      <div className="py-8"/>
      Took me another two to realize why the CSS and JS static files aren&apos;t
      loading. The culprit: a missing .nojekyll file. Son of a.

      <div className="py-8"/>
      As expected, I did not understand half of what I&apos;ve done,
      what the issue was,
      or how I fixed that said issue, and I
      guarantee that it would take me another week
      to replicate all this on another project, but hey it&apos;s up!
      <div className="py-8"/>
      This site still has issues, but I&apos;ll address them
      in another day.
      <div className="py-8"/>
      Today I need a drink.
    </div>
  </BlogPage>
);

export default FirstBlog
