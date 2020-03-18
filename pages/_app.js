import Router from 'next/router'
import * as gtag from '../lib/gtag'
import './normalize.css'
import './style.css'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}