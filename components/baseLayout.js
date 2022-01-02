import Header from "./header";
import Footer from "./footer";
import BaseHead from "./baseHead";

const BaseLayout = props => (
  <>
    <BaseHead
      title={props.title}
      image={props.image}
      description={props.description}
      url={props.url}
    />
    <div
      className="text-granite-rock min-w-screen min-w-screen h-full font-montserrat m-0 p-0 flex"
    >
      <div className="min-w-full font-montserrat text-center">
        {/*<Progress />*/}
        <Header />
        <div>
          {props.children}
        </div>
        <Footer />
      </div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  </>

);

export default BaseLayout;
