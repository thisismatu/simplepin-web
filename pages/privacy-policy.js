import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PrivacyPolicy = () => (
  <>
    <Head>
      <title>Simplepin - Privacy Policy</title>
      <meta name="description" content="Read, add and manage your Pinboard bookmarks with ease. No frills, just the basics done well." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <section id="content" >
      <div className="content">
        <h2>Simplepin Privacy Policy</h2>
        <p><em>Last updated: 25.4.2016</em></p>
        <p>Simplepin has been created by Mathias Lindholm to help you browse and manage your Pinboard bookmarks. This page informs you of our policies regarding the collection, use and disclosure of Personal Information I receive from users of the app.</p>
        <p>While using Simplepin you are asked to provide your Pinboard username and password, Simplepin does not store the password as it uses a API token based authentication. Your username and API token are the only Personal Information that are stored safely on the device. If you delete the app or sign out, your username and API token will be deleted from the device. All your Pinboard bookmarks are read from and stored on the Pinboard server. Simplepin and it’s creator can not be held responsible for any incorrect data you may enter in the app.</p>
        <p>Like many apps, Simplepin collects information that your device sends whenever you use the app. This log data may include information such as your device model, OS version, the time spent in the app, and other statistics. I use Chrashlytics to collect, monitor and analyze this data.</p>
        <p>Your Personal Information will never be be used to spam you with email or marketing material.</p>
        <p>This Privacy Policy is effective as of 25.4.2016 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
        <p>If you have any questions about this Privacy Policy, please contact me.</p>
      </div>
    </section>
    <Footer />
  </>
)

export default PrivacyPolicy
