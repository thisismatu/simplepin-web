import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AppStoreButton } from '../components/StoreButtons';

const reviews = [
  {
    rating: 2,
    title: 'Superb',
    body: 'Does a few things extremely well. If you want a simple and very capable app for pinboard, this is the best to start with and it may be all you ever need. Well done.',
    user: 'Mike Bradshaw',
  },
  {
    rating: 5,
    title: 'Almost perfect',
    body: 'I love this app. I was using the bookmark version for Safari, but now that there’s a share extension, I use the app exclusively. The only thing I’d change is the ability to add tags in the first pop up instead of going to options. Thank you for making such a great app, and for free too!',
    user: 'Emmachette',
  },
  {
    rating: 5,
    title: 'Good pinboard app',
    body: 'Good, simple, and does what I expected it too. Not sure how I could expect any more from a free app.',
    user: 'sndean1',
  },
];

const features = [
  {
    icon: '/ic-tag.svg',
    title: 'Powerful search',
    body: 'With Simplepins powerful search, finding your bookmarks is super easy.',
  },
  {
    icon: '/ic-send.svg',
    title: 'Share extension',
    body: 'Add new bookmarks directly from your browser with the handy share extension.',
  },
  {
    icon: '/ic-reader-mode.svg',
    title: 'Reader mode',
    body: 'Focus on reading without ads, floats or other distractions.',
  },
  {
    icon: '/ic-split-view.svg',
    title: 'Multitasking',
    body: 'Open links in external browser and enjoy split screen multitasking.',
  },
  {
    icon: '/ic-lock.svg',
    title: 'Password manager',
    body: 'Integrates with password managers like LastPass and 1Password.',
  },
];

const Review = ({ rating, title, body, user, href }) => (
  <div className="review">
    {rating && (
      <div className="review-rating">
        <img alt="star" src="/star.svg" />
        <img alt="star" src="/star.svg" />
        <img alt="star" src="/star.svg" />
        <img alt="star" src="/star.svg" />
        <img alt="star" src="/star.svg" />
      </div>
    )}
    {title && <span className="review-title">{title}</span>}
    <span className="review-text">“{body}”</span>
    <span className="review-source">
      {href && (
        <a
          href="https://thesweetsetup.com/apps/best-pinboard-app-ios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          – {user}
        </a>
      )}
      {!href && <>– {user}</>}
    </span>
  </div>
);

const Feature = ({ icon, title, body }) => (
  <div className="feature">
    <div className="feature-icon">
      <img src={icon} width="24" />
    </div>
    <h4 className="feature-title">{title}</h4>
    <p className="feature-body">{body}</p>
  </div>
);

const Home = () => (
  <>
    <Head>
      <title>Simplepin - A simple and free Pinboard app</title>
      <meta
        name="description"
        content="Read, add and manage your Pinboard bookmarks with ease. No frills, just the basics done well."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content="https://simplepinapp.com/" />
      <meta property="og:site_name" content="Simplepin" />
      <meta property="og:title" content="Simplepin - A simple and free Pinboard app" />
      <meta
        property="og:description"
        content="Read, add and manage your Pinboard bookmarks with ease. No frills, just the basics done well."
      />
      <meta property="og:image" content="https://simplepinapp.com/simplepin-share.png" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
    <div className="alert">
      <div class="alert-content">
        <div class="alert-title">Simplepin will soon be sunsetting</div>
        <div class="alert-text">
          Simplepin was the first iOS app I've ever built. I was thrilled to see how many users
          found it useful and all the positive feedback it got. It has been years since the app
          received its last update and I think now is the time to pull the plug. I sincerely thank
          all users for their support and apologize for any inconvenience this may cause. For those
          interested, you can still find the source code from the{' '}
          <a
            href="https://github.com/thisismatu/simplepin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simplepin GitHub repo
          </a>
          . 💙
        </div>
      </div>
    </div>
    <Header />
    <section id="hero">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">A simple and free Pinboard app</h1>
          <p className="hero-subtitle">
            Read, add and manage your Pinboard bookmarks with ease. No frills, just the basics done
            well.
          </p>
          <div className="hero-buttons">
            <AppStoreButton />
          </div>
          <div className="hero-review">
            <Review
              body="It’s super fast, has a decent share extension, supports 1Password, makes it easy to search for things in your bookmarks list — try typing in multiple tags; it works flawlessly – and even supports Split View multitasking on iPad."
              user="The Sweet Setup"
              href="https://thesweetsetup.com/apps/best-pinboard-app-ios/"
            />
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
    <section id="reviews">
      <div className="reviews">
        {reviews.map((item, index) => (
          <Review
            key={index}
            rating={item.rating}
            title={item.title}
            body={item.body}
            user={item.user}
          />
        ))}
      </div>
    </section>
    <section id="features">
      <div className="features">
        <div className="features-header">
          <h2 className="features-title">Just the basics done well</h2>
          <p className="features-subtitle">
            I built Simplepin because there wasn’t a decent and free Pinboard client available. It’s
            built for the Pinboard user who appreciates a tool that does one thing well.
          </p>
        </div>
        <div className="features-list">
          {features.map((item, index) => (
            <Feature key={index} icon={item.icon} title={item.title} body={item.body} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Home;
