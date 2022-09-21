import React from "react";
import "./Experience.css";
import experience from "../../Data/Experience.json";

const Experience = () => {
  return (
    <div id="experience">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h2>Internship Experiences</h2>
            <br/>
            {experience.map((item, i) => (
              <div className="experienceblock" key={i}>
                <div className="row">
                  <div className="col-sm-5">
                    <h5>{item.year}</h5>
                  </div>
                  <div className="col-sm-7">
                    <div className="educationright">
                      <h5>{item.companyname}</h5>
                      <h6 className="position">
                        <i>{item.position}</i>
                      </h6>
                      <h6>{item.desc}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
