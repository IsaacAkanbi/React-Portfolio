import React from 'react';

const Resume = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div className="card-body" id="Resume">
          <h5 className="card-tittle">My Resume</h5>
          <div>
            {" "}
            Resume:{" "}
            <a href="./public/Isaac_Akanbi_Resume.docx">
              <p>Resume link</p>
            </a>
          </div>
          <p> 10 years project management experience</p>
          <p> Certified Scrum Master (CSM)</p>
          <p> Project Management Professional (PMP)</p>
          <p> Business Management degree</p>
          <p> Solution development and deployment expert</p>
          <p> System strengthing and process optimization expert</p>
        </div>
      </div>
    </header>
  );
};

export default Resume;