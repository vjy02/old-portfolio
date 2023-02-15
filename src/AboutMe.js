
import headshot from './images/headshot.jpg';
export default function AboutMe() {
  return (
      <div className="section">
        <div className="header">
          <h1>Code Crafting and Coffee Drinking</h1>
        </div>
        <div id="about-me-container">
          <div id="about-info">
              <p>
                Hi! My name is Victor, currently a student at the <span className="gold-font">University of Melbourne</span> pursuing a degree
                of <span className="gold-font">computing software and systems</span>.
                I had the privelage working as a data analyst where I was able to develop much needed professional 
                experience and data analytics skills, but I knew I always wanted to experience more.
              </p>
              <p>
                As a naturally curious learner, I was drawn to web development after learning the basics of HTML.
                The challenge of full-stack development appealed to me, and I felt an incredible sense of 
                accomplishment when I developed my first web application.
                Since then, I've continued to deepen my skills, 
                always seeking out new challenges and opportunities to grow my knowledge and expertise.
                  
              </p>
              <div>
                <ul>
                  <li>Reactjs</li>
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>Nodejs</li>
                </ul>
                <ul>
                  <li>Python</li>
                  <li>C#</li>
                  <li>.NET</li>
                  <li>SQL</li>
                  <li>PowerBI</li>
                  <li>Git</li>
                </ul>
              </div>
          </div>

          <div className="wrapper">
            <img className="img" src={headshot} />
          </div>
        </div>
      </div>
  );
}
