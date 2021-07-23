import React, { useState } from 'react';
import '../style/home.css';

const AboutMe = () => {
  return (
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">About Me</h1>
        <image src="./photo.jpg" alt="photo id" className="float-md-right"/>
        
        <p className="card">
          An IT Project Manager with over 12 years’ experience in managing
          software development, process optimization, and systems integration
          projects. He is an MBA graduate from University of Wales, United
          Kingdom, Certified Scrum Master (CSM), Project Management Professional
          (PMP), and Certified Human Resources Leader (CHRL). He has led several
          business process re-engineering and organizational development
          projects for public and private sector organizations. Passionate
          organizational effectiveness executive, with demonstrable
          understanding of business optimization and business intelligence
          solutions. An IT project manager with exceptional passion for team
          cohessiveness and result delivery. Specfic experience in Agile
          methdology for software development life cycle.
        </p>
      </div>
  );
};

export default AboutMe;
