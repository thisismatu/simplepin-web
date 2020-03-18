const currentYear = new Date().getFullYear()

const Footer = () => (
  <footer>
    <div className="footer">
      <span className="footer-appName">Simplepin</span>
      <div className="footer-links">
        <a href="/privacy-policy" className="footer-link">Privacy policy</a>
        <a href="http://onelink.to/66ee75" className="footer-link" target="_blank" rel="noopener noreferrer">Get the app</a>
      </div>
    </div>
  </footer>
)

export default Footer
