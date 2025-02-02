import "./App.css";

import Logo from "./assets/logo.svg";
import Illustration from "./assets/illustration-dashboard.png";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="wrapper">
      <header>
        <img src={Logo} alt="Ping logo" />
        <h1>We are launching soon!</h1>
        <p>Subscribe and get notified</p>
        <form>
          <input type="email" name="mail" id="mail" />
          <button type="submit">Notify Me</button>
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
