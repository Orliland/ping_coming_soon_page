import "./App.css";

import Logo from "./assets/logo.svg";
import Illustration from "./assets/illustration-dashboard.png";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={Logo} alt="Ping logo" className="logo" />
        <div className="header__content">
          <h1 className="heading">
            We are launching <strong>soon!</strong>
          </h1>
          <p className="subheading">Subscribe and get notified</p>
        </div>

        <form className="form">
          <input
            placeholder="Your email address…"
            className="form__input"
            type="email"
            name="mail"
            id="mail"
          />
          <button className="form__button" type="submit">
            Notify Me
          </button>
        </form>
      </header>
      <main>
        <img
          src={Illustration}
          alt="Illustration of the future dashboard of Ping"
        />
      </main>
      <footer>
        <SocialLinks />
        <p>© Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
