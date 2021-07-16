import React, { useState } from 'react';

const Contact = () => {
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
      </div>
  );
};

export default Contact;
