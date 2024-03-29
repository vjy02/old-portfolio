import placeholder from "./images/comingsoon.png";
import project1 from "./images/project1.PNG";
import project2 from "./images/CulinaryAIv2.PNG";
import project3 from "./images/CulinaryAI.PNG";

export default function Projects() {
  return (
    <div id="project-container">
      <div className="project-title">
        <h1>
          Some things I've <span className="gold-font">built.</span>
        </h1>
        <p>(Click on images for live demo!)</p>
        <polyline class="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
      </div>
      <div className="project-wrapper">
        <div className="project-box">
          <div className="header underline">
            <h1>CulinaryAI v2.0</h1>
          </div>
          <p>
            My improved and full stack version of CulinaryAI. Implemented MongoDB, Google OAuth
            and Next.js for the backend and frontend. Users can save recipes through their associated
            Google accounts while also accomodating for dietary needs alongisde an improved UI.
          </p>
          <ul>
            <li>Nextjs</li>
            <li>Reactjs</li>
            <li>TailWind CSS</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="project-img-wrapper">
          <a href="https://culinaryaiv2.netlify.app/" target="_blank">
            <img className="project-img" src={project2} />
          </a>
        </div>
      </div>
      <div className="project-wrapper" id="project-right">
        <div className="project-img-wrapper">
          <a href="https://culinaryai.netlify.app/" target="_blank">
            <img className="project-img" src={project3} />
          </a>
        </div>
        <div className="project-box">
          <div className="header underline">
            <h1>CulinaryAI</h1>
          </div>
          <p>
          My first project involving TailWind CSS while also exploring the new
            Chat-GPT3 API. CulinaryAI suggests recipes based of users preferred
            and non preferred ingridients. I used the SpoonacularAPI in order to
            ensure users would input valid ingridients and generated answers
            with Chat-GPT3's API. 
          </p>
          <ul>
            <li>Reactjs</li>
            <li>TailWind CSS</li>
            <li>API</li>
            <li>HTML</li>
          </ul>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="project-box">
          <div className="header underline">
            <h1>Gaming Quiz Game</h1>
          </div>
          <p>
          My first Reactjs project, this web application is a gaming quiz that
            uses OpenTriviaDB's API. Questions and answers are gathered from
            this API and a new set is generated each retry of the quiz. 
          </p>
          <ul>
            <li>Reactjs</li>
            <li>API</li>
            <li>HTML</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="project-img-wrapper">
          <a href="https://gaming-quiz-project.netlify.app/" target="_blank">
            <img className="project-img" src={project1} />
          </a>
        </div>
      </div>
    </div>
  );
}
