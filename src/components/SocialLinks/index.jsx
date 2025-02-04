import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import "./SocialLinks.css";

const Link = ({ Icon }) => {
  return (
    <li className="social-links__item">
      <a href="#" className="social-links__link">
        <Icon className="social-links__icon" />
      </a>
    </li>
  );
};

const SocialLinks = () => {
  return (
    <ul className="social-links">
      <Link Icon={FaFacebookF} />
      <Link Icon={FaInstagram} />
      <Link Icon={FaTwitter} />
    </ul>
  );
};

export default SocialLinks;
