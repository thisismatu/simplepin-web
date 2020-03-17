const Header = ({ image, title, description }) => (
  <header className="mb6-l mb4-m mb0">
    <div className="flex items-center">
      <a href="/" className="flex items-center link color-inherit pa3">
        <div className="pa2 bg-sp-blue br-pill mr3">
          <img className="db" src="/ic-simplepin.svg" alt="Simplepin" width="40" height="40" />
        </div>
        <span className="fw7 f3 near-black">Simplepin</span>
      </a>
      <nav className="ml-auto db-ns dn">
        <a href="/#features" className="link color-inherit hover-near-black pa3">Features</a>
        <a href="http://onelink.to/66ee75" className="link color-inherit hover-near-black pa3">Get the app</a>
      </nav>
    </div>
  </header>
)

export default Header
