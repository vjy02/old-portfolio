import placeholder from "./images/comingsoon.png";
import project1 from "./images/project1.PNG";
import project2 from "./images/CulinaryAI.PNG";

export default function Projects() {
  return (
    <div id="project-container">
      <div className="project-wrapper">
        <div className="project-box">
          <div className="underline">
            <h1>CulinaryAI</h1>
          </div>
          <p>
            My first project involving TailWind CSS while also exploring the new
            Chat-GPT3 API. I have always been drawn to machine learning so
            naturally when the GPT3 API got announced I knew I had to build
            something with it. CulinaryAI suggests recipes based of users
            preferred and non preferred ingridients. I used the SpoonacularAPI
            in order to ensure users would input valid ingridients and generated
            answers with Chat-GPT3's API. I plan on implementing a backend
            feature with authentication, allowing users to login and view their
            saved recipes.
          </p>
          <ul>
            <li>Reactjs</li>
            <li>TailWind CSS</li>
            <li>API</li>
            <li>HTML</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="project-img-wrapper">
          <a href="https://culinaryai.netlify.app/" target="_blank">
            <img className="project-img" src={project2} />
          </a>
        </div>
      </div>
      <div className="project-wrapper" id="project-right">
        <div className="project-img-wrapper">
          <a href="https://gaming-quiz-project.netlify.app/" target="_blank">
            <img className="project-img" src={project1} />
          </a>
        </div>
        <div className="project-box">
          <div className="header underline">
            <h1>Gaming Quiz Game</h1>
          </div>
          <p>
            My first Reactjs project, this web application is a gaming quiz that
            uses OpenTriviaDB's API. Questions and answers are gathered from
            this API and a new set is generated each retry of the quiz. Redo of
            this project is planned with more functionality (e.g. choosing
            difficulty, theme and length) alongside a more aesthetically aligned
            theme.
          </p>
          <ul>
            <li>Reactjs</li>
            <li>API</li>
            <li>HTML</li>
            <li>CSS3</li>
          </ul>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="project-box">
          <div className="header underline">
            <h1>Project ???</h1>
          </div>
          <p>
            Suspendisse potenti. Etiam id consectetur ligula. Nullam vel purus
            pharetra, posuere magna ut, eleifend nisi. Suspendisse vel risus et
            justo commodo tincidunt. Fusce eget porttitor neque. Duis lacus
            purus, sollicitudin nec rhoncus elementum, ultrices eu dolor.
            Pellentesque aliquet facilisis diam eu auctor. Donec sed ullamcorper
            lorem, sed ultrices urna. Aliquam erat volutpat.
          </p>
          <ul>
            <li>Reactjs</li>
            <li>C#</li>
            <li>.NET</li>
            <li>HTML</li>
            <li>CSS3</li>
            <li>API</li>
          </ul>
        </div>
        <div className="project-img-wrapper">
          <img className="project-img" src={placeholder} />
        </div>
      </div>
    </div>
  );
}
