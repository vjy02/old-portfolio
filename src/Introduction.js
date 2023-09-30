import Fade from "react-reveal/Fade";
import Pdf from './Resume.pdf';

export default function Introduction() {
  return (
    <div className="intro-container">
      <Fade top distance="20%" delay={1000}>
        <p className="intro-font">Hey, my name is</p>
      </Fade>
      <Fade top distance="20%" delay={1100}>
        <h1 id="intro-name">
          <span className="gold-font">Victor</span> Yoshida.
        </h1>
      </Fade>
      <Fade top distance="20%" delay={1200}>
        <p>
          I'm a <span className="gold-font">software developer</span> based in Melbourne,
          Australia. I create digital solutions that focus on
          practicality and sophistication or other times just for fun! I have a keen eye for detail and am a
          passionate, fast and curious learner. Click below for my resume or scroll
          down to see more about me and my projects.
        </p>
      </Fade>
       <Fade top distance="20%" delay={1300}>
         <a href = {Pdf} target = "_blank">
          <button id="resume">Resume</button>
        </a>
      </Fade>
    </div>
  );
}
