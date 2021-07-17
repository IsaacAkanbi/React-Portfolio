import React, { useState } from 'react';

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
    
  if (!email) {
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
        <h4>
          My Contact{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
            <p class="card-text"> Email: <a href="isaac.akanbi@hotmail.co.uk">
                    <email>isaac.akanbi@hotmail.co.uk</email>
                </a> </p>
            <p class="card-text"> Github: <a href="https://github.com/IsaacAkanbi">
                    <github>https://github.com/IsaacAkanbi </github>
                </a> </p>
            <p class="card-text"> Linkedin: <a
                    href="https://www.linkedin.com/in/isaac-o-akanbi-pmp-mba-chrl-csm-a5ab8a2b/">
                    <linkedin>Linkedin profile</linkedin>
                </a></p>
        </h4>

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
