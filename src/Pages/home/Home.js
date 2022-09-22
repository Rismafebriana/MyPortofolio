import React from "react";
import "./Home.css";
import profileimg from "../../assets/img/profileimage.png";
import Linkedinicon from "../../assets/img/socialicons/linkedin.png";
import Instagramicon from "../../assets/img/socialicons/instagram.png";
import Githubicon from "../../assets/img/socialicons/github.png";
import MailIcon from "../../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                alt="Risma Febriana Fajarwati"
                className="img-fluid"
              />
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/risma-febriana-fajarwati/"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                  />
                </a>
                <a
                  href="https://github.com/rismafebriana"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                  />
                </a>
                <a
                  href="https://www.instagram.com/@rsmafebriana/"
                  rel="noreferrer"
                >
                  <img
                    src={Instagramicon}
                    alt="instagram"
                  />
                </a>
                <a
                  href="rismapics@gmail.com"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent">
              <h1>Risma Febriana Fajarwati</h1>
              <h2>React and React Native For Front End Developer</h2>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
