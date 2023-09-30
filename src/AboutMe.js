import headshot from "./images/headshot.jpg";
export default function AboutMe() {
  return (
    <div id="about-section">
      <div className="header underline">
        <h1>About Me</h1>
      </div>
      <div id="about-me-container">
        <div id="about-info">
          <p>
            Currently a student at the{" "}
            <span className="gold-font">University of Melbourne</span> pursuing
            a degree of{" "}
            <span className="gold-font">computing software and systems</span>.
            As a naturally curious learner, the challenge of{" "}
            <span className="gold-font">full-stack development</span> appealed
            to me, and I felt an incredible sense of accomplishment when I
            developed my first web application as a stepping stone towards that
            goal. Since then, I've continued to deepen my skills, always seeking
            out new challenges and opportunities to grow my knowledge and
            expertise.
          </p>
          <ul>
            <li>Reactjs</li>
            <li>HTML</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Nodejs</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
            <li>PowerBI</li>
          </ul>
        </div>
        <div className="wrapper">
          <img className="img" src={headshot} />
        </div>
      </div>
    </div>
  );
}
