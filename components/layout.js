import Head from "next/head";

export default function Layout({children}) {
  return (

    <div className="main-screen">
      <div data-include="main-page-header" />
      <main>
        { children }
      </main>
    </div>
  );
}
