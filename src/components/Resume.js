import React from 'react';
import '../style/home.css';

const Resume = () => {
  return (
    <div className="card flex-row justify-space-between-lg justify-center align-center">
      <div id="Resume">
        <h5 className="card-tittle">My Resume</h5>
        <div>
          {" "}
          <a href={require("../style/Isaac_Akanbi_Position_ESD.pdf")}>
            <p>Download Detailed Resume</p>
          </a>
        </div>
        <ul>
          <li> 10 years project management experience</li>
          <li> Certified Scrum Master (CSM)</li>
          <li> Project Management Professional (PMP)</li>
          <li> Business Management degree</li>
          <li> Solution development and deployment expert</li>
          <li> System strengthing and process optimization expert</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;