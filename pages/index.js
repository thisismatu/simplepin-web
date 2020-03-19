import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AppStoreButton, GooglePlayButton } from '../components/StoreButtons'

const Home = () => (
  <>
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
      <section id="hero">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">A simple and free Pinboard app</h1>
            <p className="hero-subtitle">Read, add and manage your Pinboard bookmarks with ease. No frills, just the basics done well.</p>
            <div className="hero-buttons">
              <AppStoreButton />
            </div>
            <div className="hero-review">
              <div className="review">
                <span className="review-text">“It’s super fast, has a decent share extension, supports 1Password, makes it easy to search for things in your bookmarks list — try typing in multiple tags; it works flawlessly – and even supports Split View multitasking on iPad.”</span>
                <span className="review-source">
                  <a href="https://thesweetsetup.com/apps/best-pinboard-app-ios/" target="_blank" rel="noopener noreferrer">– The Sweet Setup</a>
                </span>
              </div>
            </div>
          </div>
          <div className="hero-video">
            <div className="hero-device">
              <video autoPlay muted loop preload="auto">
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="features">
          <div className="features-header">
            <h2 className="features-title">Just the basics done well</h2>
            <p className="features-subtitle">I built Simplepin because there wasn’t a decent and free Pinboard client available. It’s built for the Pinboard user who appreciates a tool that does one thing well.</p>
          </div>
          <div className="features-list">
            <div className="feature">
              <div className="feature-icon">
                <img src="/ic-tag.svg" width="24" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Powerful search</h4>
                <p className="feature-body">With Simplepins powerful search, finding your bookmarks is super easy</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src="/ic-send.svg" width="24" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Share extension</h4>
                <p className="feature-body">Add new bookmarks directly from your browser with the handy share extension</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src="/ic-reader-mode.svg" width="24" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Reader mode</h4>
                <p className="feature-body">Focus on reading without ads, floats or other distractions</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src="/ic-split-view.svg" width="24" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Multitasking</h4>
                <p className="feature-body">Open links in external browser and enjoy split screen multitasking</p>
              </div>
            </div>
            <div className="feature mr-auto">
              <div className="feature-icon">
                <img src="/ic-lock.svg" width="24" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Password manager</h4>
                <p className="feature-body">Integrates with password managers like LastPass and 1Password</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  )

  export default Home
