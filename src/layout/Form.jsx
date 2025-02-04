import "./Form.css";

// TODO: add form validation and input state

const Form = () => {
  return (
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
  );
};

export default Form;
