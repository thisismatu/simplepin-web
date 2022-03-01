const Header = ({ image, title, description }) => (
  <header>
    <div className="header">
      <a href="/" className="header-logo">
        <div className="header-logoIcon">
          <img src="/ic-simplepin.svg" alt="Simplepin" width="40" height="40" />
        </div>
        <span className="header-logoText">Simplepin</span>
      </a>
      <nav className="header-navigation">
        <a href="/#reviews" className="header-navigationItem">Reviews</a>
        <a href="/#features" className="header-navigationItem">Features</a>
        <a href="http://onelink.to/66ee75" className="header-navigationItem" target="_blank" rel="noopener noreferrer">Get the app</a>
      </nav>
    </div>
  </header>
)

export default Header
