import React from 'react';

const Resume = () => {
  return (
    
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div  id="Resume">
          <h5 className="card-tittle">My Resume</h5>
          <div>
            {" "}
            {/* Resume:{" "} */}
            <a href="./public/Isaac_Akanbi_Resume.docx">
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