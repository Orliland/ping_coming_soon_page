import "./App.css";

import Illustration from "./assets/illustration-dashboard.png";
import SocialLinks from "./components/SocialLinks";
import Header from "./layout/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
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
