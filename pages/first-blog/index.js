import BlogPage from '../../components/blog-page';
import Javascript from "../../assets/blogs/javascript.jpg";
import Laptop from "../../assets/blogs/laptop.jpg";
import {articles} from "../../pages/api/articles";

const FirstBlog = () => (
  <BlogPage
      src={articles["first-blog"].src}
      head={articles["first-blog"].head}
      date={articles["first-blog"].date}
      title={articles["first-blog"].title}
      subtitle={articles["first-blog"].subtitle}
      url={articles["first-blog"].url}
      photoCredit={articles["first-blog"].photoCredit}
      photoCreditLink={articles["first-blog"].photoCreditLink}
  >
    <div className="text-14 sm:text-16">
      <div className="pt-30 pb-4"/>
      <span className="text-16 sm:text-18 uppercase">
        Tuesday
      </span>
      <div className="py-4"/>
      Holy crap do I need a rewrite.
      <div className="py-4"/>
      Safe to assume I probably haven&apos;t been using 11ty properly anyway,
      it&apos;s time to redo this whole disaster of a personal
      site using another framework.
      <div className="py-4"/>
      Plain CSS doesn&apos;t really scream, &quot;Well yes I have two years of frontend
      experience!&quot; (a late realization, yes, my bad),
      so redoing all this makes sense.

      <div className="pt-30 pb-4"/>
      <span className="text-16 sm:text-18 uppercase">
        Wednesday
      </span>
      <div className="py-4"/>
      A quick Google search tells me that GatsbyJS is the best alternative for
      building static sites
      quickly, but for reasons I&apos;m legally obligated not to say,
      I gonna skip that.
      <div className="py-4"/>
      Big whoop. Anyway.
      <div className="py-4"/>
      Fade in music, cue drumroll, enter{' '}
      <a href={"https://nextjs.org/"} className="underline" rel="noreferrer" target="_blank">Next.js</a>.
      <div className="py-4"/>
      A little intimidating to use Next since apparently it&apos;s on
      top of React and I have
      zero React experience, but as with my default response to new skills,
      sure, why not. I can try.
      <div className="py-4"/>
      To be fair React is the most common
      required skill I&apos;ve seen on job descriptions, and this alone
      is more than enough reason
      for me to try.
      <div className="py-4"/>
      One week of half-assed crash course I go!

      <div className="pt-30 pb-4"/>
      <span className="text-16 sm:text-18 uppercase">
        Thursday
      </span>
      <div className="py-4"/>
      Next is appreciatedly intuitive, <strike>very</strike> a little
      like Vue (honestly beyond
      all the fastest, best-performance bullcrap benefits of choosing any
      and all them frameworks
      , they really feel like the same, especially in the context of
      simple static sites), but it&apos;s
      always worth learning a different XXX.js if you want to land a
      developer job, so err yeah, sure.

      <div className="pt-30 pb-4"/>
      <span className="text-16 sm:text-18 uppercase">
        Friday
      </span>
      <div className="py-4"/>
      I&apos;ve been setting up Next on my local machine, made things
      work after at least fifteen embarassing Google searches of shite like
      {' '}<i>how next js image</i> and <i>how next js link</i>.
      <div className="py-4"/>
      Now my progress begs the question,
      do I redesign my site, or should I just recreate the exact same layout?
      <div className="py-4"/>
      A related note of me using Tailwind because.. no reason. Sounds
      fancy, and I&apos;m already familiar with it.
      <div className="py-4"/>
      And Google says Tailwind CSS is number 1 blah blah in ranking
      if you ask it{" "}
      <i>css frameworks 2021</i>. Okay. Noted.

      <div className="pt-30 pb-4"/>
      <span className="text-16 sm:text-18 uppercase">
        Friday night
      </span>
      <div className="py-4"/>
      <strike>I think Tailwind is repetitive in typing the class names, but a
        counter point would mention that
        if one is repeating too many long tailwind class names, then
        maybe a refactor is needed in the code, so maybe my code
        is bad and so I&apos;ll pretend I never brought this up.</strike>

      <div className="py-4"/>
      So yeah idk Tailwind GOAT Tailwind you rock Bootstrap Bulma yall suck.

      <div className="pt-30 pb-4"/>

      <span className="text-16 sm:text-18 uppercase">
        Saturday{" "}
      </span>
      <span className="text-16 sm:text-18">
        (damn it&apos;s saturday already?)
      </span>
      <div className="py-4"/>
      It is fun. I enjoy the bits where I go back to CSS basics (Alexa, how
      do you center a div), but the moment something works out is always worth
      the entire morning lost.

      <div className="py-4"/>
      I&apos;ve written the home page,
      and now I&apos;m writing this
      sample blog I hope my future employers would never, ever see.

      <div className="pt-30 pb-4"/>
      <span className="text-16 sm:text-18 uppercase">
        Sunday
      </span>
      <div className="py-4"/>
      Okay fun&apos;s over, gotta get this up and running on github pages. Code is
      still messy, but eh.
      <div className="py-4"/>
      Next is pretty nice. I only appreciate til today, and though I don&apos;t
      feel a lot of the difference with Vue,
      except for the syntax and overall how I need to do things, it&apos;s
      refreshing trying something new.

      <div className="pt-30 pb-4"/>
      <span className="text-16 sm:text-18 uppercase">
        Sunday night
      </span>{" "}
      <span className="text-16 sm:text-18">
         and please let me deploy it tonighttfsfdghjk
      </span>
      <div className="py-4"/>
      Deploying to github pages is a bitch.

      <div className="py-4"/>
      As a person who doesn&apos;t really
      understand things, my entire career&apos;s existence depends on these
      anonymous angels who writes how to do things online.

      <div className="pt-30 pb-4"/>
      <span className="text-16 sm:text-18 uppercase">
        Monday
      </span>{" "}
      <span className="text-16 sm:text-18">
         dude come on deploy this
      </span>
      <div className="py-4"/>
      As Taylor Swift{" "}
      <a href="https://genius.com/24418686" rel="noreferrer" className="underline">said</a>,
      &quot;...And here we are again /
      in the middle of the night / &quot; but unlike her dancing in the kitchen,
      I&apos;m hunched over my laptop at 2AM
      struggling how to deploy a site no one
      would really give two cents about.
      <div className="py-4"/>
      Took me two hours to commit my changes, figure out deployment
      and fix <i>next out</i> and <i>npm run deploy</i>.

      <div className="py-4"/>
      Took me another three to realize why the CSS and JS static files aren't
      loading.

      <div className="py-4"/>
      The culprit: the missing .nojekyll file.

      <div className="py-4"/>
      As expected, I did not understand half of what I've done, and I
      guarantee that it would take me hours to replicate all this on another
      project, but hey it&apos;s up!
      <div className="py-4"/>
      This site still has issues, but I'll address them
      in another day. I need a drink.
    </div>
  </BlogPage>
);

export default FirstBlog
