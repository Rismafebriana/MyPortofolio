import React, { useState } from "react";
import "../components/Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Skills from "../assets/img/skills.png";
import Interest from "../assets/img/interest.png";
import Experience from "../assets/img/experience.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div id="navigation">
        <ul>
          <Link to="/home">
            <li>
              <img src={Home} alt="home" />
            </li>
          </Link>
          <Link to="/about">
            <li>
              <img src={About} alt="about" />
            </li>
          </Link>
          <Link to="/interest">
            <li>
              <img src={Interest} alt="interest" />
            </li>
          </Link>
          <Link to="/experience">
            <li>
              <img src={Experience} alt="experience" />
            </li>
          </Link>
          <Link to="/skills">
            <li>
              <img src={Skills} alt="skills" />
            </li>
          </Link>
        </ul>
      </div>

      <div id="navigation-mob">
        <h1>
          <Link to="/home">Risma Febriana Fajarwati</Link>
        </h1>
        <i
          className={visible ? "fa fa-close" : "fa fa-bars"}
          onClick={() => setVisible(!visible)}
        ></i>
        {visible ? (
          <ul
            className="list-unstyled"
          >
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/interest">
              <li>Interest</li>
            </Link>
            <Link to="/experience">
              <li>Experience</li>
            </Link>
            <Link to="/skills">
              <li>Skills</li>
            </Link>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
