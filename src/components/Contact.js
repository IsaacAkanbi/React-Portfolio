import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';
import '../style/home.css';

const Contact = () => {
  
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState("");
  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log("onChange: ", formState);
  
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validEmail = validateEmail(formState.email);
    if (!validEmail) {
      return setErrorMessage("Email is not valid");
    } else if (!formState.contactName.length || !formState.message.length) {
      return setErrorMessage(`Missing required field.`);
    } else {
      setErrorMessage("");
    }
    console.log("FormSubmit", formState);
    setFormState({
      email: "",
      contactName: "",
      message: "",
    });

  }
  
  
  return (
    <div className="card  mb-5">
      <h3>My Contact </h3>
      <div>
        <h6 className="card-text">
          {" "}
          Email:{" "}
          <a href="mailto:isaac.akanbi@hotmail.co.uk">
            <p>isaac.akanbi@hotmail.co.uk</p>
          </a>{" "}
        </h6>
        <h6 className="card-text">
          {" "}
          Github:{" "}
          <a href="https://github.com/IsaacAkanbi">
            <p>https://github.com/IsaacAkanbi </p>
          </a>{" "}
        </h6>
        <h6 className="card-text">
          {" "}
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/isaac-o-akanbi-pmp-mba-chrl-csm-a5ab8a2b/">
            <p>Linkedin profile</p>
          </a>
        </h6>
      </div>
      <div>
        <h3>Contact Me</h3>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            className="form-content col"
            value={formState.contactName}
            type="text"
            name="contactName"
            onChange={handleInputChange}
            placeholder="Enter your name"
          />

          <input
            className="form-content col"
            value={formState.email}
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />

          <input required
            className="form-content col py-5"
            value={formState.message}
            type="text"
            name="message"
            onChange={handleInputChange}
            placeholder="Enter your message"
          />
          {errorMessage && <div>{errorMessage}</div>}

          <button className="form-content col py-3" type="submit">
            {" "}
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
