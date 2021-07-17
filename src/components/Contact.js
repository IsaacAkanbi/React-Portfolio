import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';

const Contact = () => {

  // Setup some State for the Form (and give an initial value)
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {

    const { target } = e;
    // const inputType = target.name;
    // const inputValue = target.value;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  if (!validateEmail || !email) {
    setErrorMessage('Email is not valid');
  return;
  } 
  if (!message) {
    setErrorMessage('please enter message');
  return;
  }
  setContactName('');
  setEmail('');
  setMessage('');

  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log("Submitted.....")
  // }
  // const handleChange = (event) => {
  //   console.log(event.target)
  //   console.log(event.target.name, event.target.value)
  //   // validate each user input 
  //   let name = event.target;
  //   let email = event.target.name.email
  //   console.log(name, email);

  //  // this.setState({ [event.target.name]: event.target.value })
  // }

  return (
   
      <div className="container text-center mb-5">
        <h3>
          My Contact{' '}
        </h3>
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
        
          </span>{' '}
            <h6 className="card-text"> Email: <a href="isaac.akanbi@hotmail.co.uk">
            <p>isaac.akanbi@hotmail.co.uk</p>
                </a> </h6>
            <h6 className="card-text"> Github: <a href="https://github.com/IsaacAkanbi">
                    <p>https://github.com/IsaacAkanbi </p>
                </a> </h6>
            <h6 className="card-text"> Linkedin: <a
                    href="https://www.linkedin.com/in/isaac-o-akanbi-pmp-mba-chrl-csm-a5ab8a2b/">
                    <p>Linkedin profile</p>
                </a>
                
                </h6>
        <div>
          <form>
            <input 
              // value={contactName}
              type="text"
              name="contactName"
              onChange={handleInputChange } 
              placeholder="Enter your name"
              />

            <input 
              // value={email}
              type="email"
              name="email"
              onChange={handleInputChange} 
              placeholder="Enter your email address"
              />

            <input 
              // value={message}
              type="text"
              name="message"
              onChange={handleInputChange} 
              placeholder="Enter your message"
              />

            <button className="btn btn-primary" type="submit" onClick={handleFormSubmit}> Submit Message</button>
          </form>
        </div>
      </div>
  );
};

export default Contact;
