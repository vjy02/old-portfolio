import "./styles.css";
import Header from "./Header.js";
import Introduction from "./Introduction.js";
import SocialMedia from "./SocialMedia.js";
import ContactMe from "./ContactMe.js";
import AboutMe from "./AboutMe.js"
import Projects from "./Projects.js"
import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <PuffLoader color={"#F0F8FF"} />
        </div>
      ) : (
        <div id="home">
          <SocialMedia />
          <Header />
          <div id="content-container">
            <Introduction />
            <Parallax>
              <Fade bottom distance="20%" duration={2000}>
                <AboutMe />
              </Fade>
            </Parallax>
            <Parallax>
              <Fade bottom distance="10%" duration={1000}>
                <Projects />
              </Fade>
            </Parallax>
            <Parallax>
              <Fade bottom distance="20%" duration={1000}>
                <ContactMe />
              </Fade>
            </Parallax>
          </div>
        </div>
      )}
    </div>
  );
}
