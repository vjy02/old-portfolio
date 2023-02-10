import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Fade";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [pos, setPos] = useState(true)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect (()=>{
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 5){
           setPos(false)
        } else {
           setPos(true)
        }
    })
},[])

  return (
    <Bounce top duration={500}in={!scrolling}>
      <nav style={{boxShadow: pos ? "none" : "0 -2px 10px rgba(0, 0, 0, 1)"}}>
        <Fade top>
          <Link to="home" smooth={true}>
            <p className="color-hover"> Home </p>
          </Link>
        </Fade>
        <Fade top>
          <p className="color-hover">
            <Link to="about-me-container" smooth={true}>
              {" "}
              About{" "}
            </Link>
          </p>
        </Fade>
        <Fade top delay={200}>
          <p className="color-hover orange" id="projects">
            {" "}
            Projects{" "}
          </p>
        </Fade>
        <Fade top delay={400}>
          <p className="color-hover purple" id="contact-me">
            {" "}
            Contact Me{" "}
          </p>
        </Fade>
      </nav>
    </Bounce>
  );
}
