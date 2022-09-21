import React from "react";
import css from "../../Data/Skillsimg/css.png";
import javascript from "../../Data/Skillsimg/javascript.png";
import html from "../../Data/Skillsimg/html.png";
import excell from "../../Data/Skillsimg/excell.png";
import powerpoint from "../../Data/Skillsimg/powerpoint.png";
import word from "../../Data/Skillsimg/word.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Skills</h2>
                <br />
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img src={css} className="img-fluid" alt="Css" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={javascript}
                    className="img-fluid"
                    alt="Javascript"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={html}
                    className="img-fluid"
                    alt="Html"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img src={excell} className="img-fluid" alt="Excell" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={powerpoint}
                    className="img-fluid"
                    alt="Powerpoint"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={word}
                    className="img-fluid"
                    alt="Word"
                  />
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
