import Fade from "react-reveal/Fade";
export default function Introduction() {
  return (
    <div className="intro-container">
      <Fade top distance="20%" delay={1000}>
        <p className="intro-font">Hey, my name is</p>
      </Fade>
      <Fade top distance="20%" delay={1100}>
        <h1 id="intro-name">
          <span className="cyan-font">Victor</span> Yoshida.
        </h1>
      </Fade>
      <Fade top distance="20%" delay={1200}>
        <p>
          I'm a <span className="cyan-font">software developer</span> and{" "}
          <span className="cyan-font">data analyst</span> based in Melbourne,
          Australia. I create and design digital solutions that focus on
          practicality and sophistication. I have a keen eye for detail and am a
          passionate, fast and curious learner.
        </p>
      </Fade>
       <Fade top distance="20%" delay={1300}>
        <button id="resume">Resume</button>
      </Fade>
    </div>
  );
}
