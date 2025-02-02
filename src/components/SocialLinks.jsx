import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Link = ({ Icon }) => {
  return (
    <li>
      <a href="#">
        <Icon />
      </a>
    </li>
  );
};

const SocialLinks = () => {
  return (
    <ul>
      <Link Icon={FaFacebookF} />
      <Link Icon={FaInstagram} />
      <Link Icon={FaTwitter} />
    </ul>
  );
};

export default SocialLinks;
