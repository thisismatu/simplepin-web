import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => (
  <div className="mw8 center pa3-ns pa2">
    <Head>
      <title>Simplepin - A simple and free Pinboard app</title>
      <meta name="description" content="Read, add and manage your Pinboard bookmarks with ease. No frills, just the basics done well." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content="https://simplepinapp.com/" />
      <meta property="og:site_name" content="Simplepin" />
      <meta property="og:title" content="Simplepin - A simple and free Pinboard app" />
      <meta property="og:description" content="Read, add and manage your Pinboard bookmarks with ease. No frills, just the basics done well." />
      <meta property="og:image" content="https://simplepinapp.com/simplepin-share.png" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
    <Header />
    <main>
      <section className="mb6-l mb5-m mb4">
        <div className="flex flex-wrap items-center">
          <div className="w-50-l w-100 pa3 pb3-l pb5">
            <h1 className="f1 lh-title mt0 mb3 near-black">A simple and free Pinboard app</h1>
            <h2 className="f3 fw4 mt0 mb3 near-black">Read, add and manage your Pinboard bookmarks with ease. No frills, just the basics done well.</h2>
            <div className="pv2 mb3 flex flex-wrap">
              <a href="https://itunes.apple.com/us/app/simplepin/id1107506693?ls=1&mt=8" className="dim ma2 ml0 flex-shrink-0" target="_blank" rel="noopener noreferrer">
                <img src="/btn-appstore.svg" height="56" className="db" />
              </a>
            </div>
            <div className="f6">
              <span className="db i">“It’s super fast, has a decent share extension, supports 1Password, makes it easy to search for things in your bookmarks list — try typing in multiple tags; it works flawlessly – and even supports Split View multitasking on iPad.”</span>
              <a href="https://thesweetsetup.com/apps/best-pinboard-app-ios/" className="dib link color-inherit hover-near-black mt2" target="_blank" rel="noopener noreferrer">>– The Sweet Setup</a>
            </div>
          </div>
          <div className="w-50-l w-100">
            <div className="simplepin-video">
              <video autoPlay muted loop preload="auto">
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="mb6-l mb5-m mb4">
        <div className="flex flex-wrap justify-between">
          <div className="w-33-l w-50-m w-100 pv4-ns pa3">
            <div className="dib br-pill bg-sp-light-blue pa3 mv3">
              <img src="/ic-search.svg" width="24" className="db" />
            </div>
            <h3 className="f4 fw6 lh-title mv2 near-black">Powerful search</h3>
            <p className="mv0">Find your bookmarks with ease by using multiple search terms</p>
          </div>
          <div className="w-33-l w-50-m w-100 pv4-ns pa3">
            <div className="dib br-pill bg-sp-light-blue pa3 mv3">
              <img src="/ic-share.svg" width="24" className="db" />
            </div>
            <h3 className="f4 fw6 lh-title mv2 near-black">Share extension</h3>
            <p className="mv0">Add bookmarks from the browser with the nifty share extension</p>
          </div>
          <div className="w-33-l w-50-m w-100 pv4-ns pa3">
            <div className="dib br-pill bg-sp-light-blue pa3 mv3">
              <img src="/ic-reader-mode.svg" width="24" className="db" />
            </div>
            <h3 className="f4 fw6 lh-title mv2 near-black">Reader mode</h3>
            <p className="mv0">Focus on reading without ads, floats or other distractions</p>
          </div>
          <div className="w-33-l w-50-m w-100 pv4-ns pa3">
            <div className="dib br-pill bg-sp-light-blue pa3 mv3">
              <img src="/ic-split-view.svg" width="24" className="db" />
            </div>
            <h3 className="f4 fw6 lh-title mv2 near-black">Multitasking</h3>
            <p className="mv0">Open links in external browser and enjoy split screen multitasking</p>
          </div>
          <div className="w-33-l w-50-m w-100 pv4-ns pa3 mr-auto">
            <div className="dib br-pill bg-sp-light-blue pa3 mv3">
              <img src="/ic-lock.svg" width="24" className="db" />
            </div>
            <h3 className="f4 fw6 lh-title mv2 near-black">Password manager</h3>
            <p className="mv0">Integrates with password managers like LastPass and 1Password</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  )

  export default Home
