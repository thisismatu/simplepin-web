const currentYear = new Date().getFullYear()

const Footer = () => (
  <footer>
    <div className="flex flex-wrap items-center justify-between-ns justify-start">
      <span className="f6 fw6 pa3 mr-auto-ns">Simplepin</span>
      <a href="/privacy-policy" className="link color-inherit f6 hover-near-black pa3">Privacy policy</a>
      <a href="http://onelink.to/66ee75" className="link color-inherit f6 hover-near-black pa3">Get the app</a>
    </div>
  </footer>
)

export default Footer
