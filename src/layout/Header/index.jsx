import Form from "../Form";
import Logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
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
  );
};

export default Header;
