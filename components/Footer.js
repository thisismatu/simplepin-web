const currentYear = new Date().getFullYear()

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-left">
        <strong>Simplepin</strong><br/>
        <span>A simple and free Pinboard app by <a href="https://mathiaslindholm.com" target="_blank" rel="noopener noreferrer">Mathias Lindholm</a></span>
      </div>
      <div className="footer-links">
        <a href="/privacy-policy" className="footer-link">Privacy policy</a>
        <a href="http://onelink.to/66ee75" className="footer-link" target="_blank" rel="noopener noreferrer">Get the app</a>
      </div>
    </div>
  </footer>
)

export default Footer
