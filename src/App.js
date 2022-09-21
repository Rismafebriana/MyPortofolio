import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/home/Home";
import "./components/Nav.css";
import About from "./Pages/about/About";
import Interest from "./Pages/interest/Interest";
import Experience from "./Pages/experience/Experience";
import Skills from "./Pages/skills/Skills";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
  }, []);

  return (
    <div>
      <Nav />
   
      <Routes>
        <Route exact="true" path="/home" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/interest" element={<Interest />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </div>
  );
}

export default App;
