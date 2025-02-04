import { useState } from "react";

import "./Form.css";

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

const Form = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(null);

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  return (
    <form className="form" onSubmit={handleEmailSubmit}>
      <div className="form__group">
        <input
          placeholder="Your email address…"
          className="form__input"
          type="text"
          name="mail"
          id="mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {isEmail === false && (
          <span className="form__alert">
            Please provide a valid email address
          </span>
        )}
      </div>

      <button className="form__button" type="submit">
        Notify Me
      </button>
    </form>
  );
};

export default Form;
