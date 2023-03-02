
import headshot from './images/headshot.jpg';
export default function AboutMe() {
  return (

      <div id="about-section">
        <div className="header underline">
          <h1>About Me</h1>
        </div>
        <div id="about-me-container">
          <div id="about-info">
              <p>
                Hi! My name is Victor, currently a student at the <span className="gold-font">University of Melbourne</span> pursuing a degree
                of <span className="gold-font">computing software and systems</span>.

                I had the privelage working as a <span className="gold-font">data analyst</span> where I was able to develop much needed professional 
                experience and data analytics skills, but I knew I always wanted to experience more. Hence my current
                learning journey in cloud solutions like <span className="gold-font">Azure</span> and further refining my frontend skills.
              </p>
              <p id = "second-description">
                As a naturally curious learner, I was drawn to web development after learning the basics of HTML.
                The challenge of <span className="gold-font">full-stack development</span> appealed to me, and I felt an incredible sense of 
                accomplishment when I developed my first web application.
                Since then, I've continued to deepen my skills, 
                always seeking out new challenges and opportunities to grow my knowledge and expertise.
                  
              </p>
              <ul>
                <li>Reactjs</li>
                <li>HTML</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>Python</li>
                <li>C</li>
                <li>Java</li>
                <li>SQL</li>
                <li>PowerBI</li>
                <li>Git</li>
              </ul>
          </div>
          <div className="wrapper">
            <img className="img" src={headshot} />
          </div>
        </div>
      </div>

  );
}
