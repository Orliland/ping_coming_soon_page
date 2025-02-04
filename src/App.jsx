import "./App.css";

import Logo from "./assets/logo.svg";
import Illustration from "./assets/illustration-dashboard.png";
import SocialLinks from "./components/SocialLinks";
import Form from "./layout/Form";

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

        <Form />
      </header>
      <main className="main">
        <img
          className="thumbnail"
          src={Illustration}
          alt="Illustration of the future dashboard of Ping"
        />
      </main>
      <footer className="footer">
        <SocialLinks />
        <p className="footer__copy">© Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
