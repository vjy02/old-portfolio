import placeholder from './images/comingsoon.png';
import project1 from './images/project1.PNG';
export default function Projects() {
    return(
        <div id="project-container">
            <div className = "project-wrapper">
                <div className = "project-box">
                    <div className="underline">
                        <h1>Gaming Quiz Game</h1>
                    </div>
                    <p>My first Reactjs project, I put this first as it marked the start of my journey
                            as a developer. The web application uses React hooks and states
                            to properly track the quiz game. Questions and answers are gathered from an external API and a new
                            set is generated each retry. 
                    </p>
                    <ul>
                        <li>Reactjs</li>
                        <li>HTML</li>
                        <li>CSS3</li>
                    </ul>
                </div>
                <div className = "project-img-wrapper">
                    <a href="https://gaming-quiz-project.netlify.app/" target = "_blank">
                        <img className="project-img" src={project1}/>
                    </a>
                </div>
            </div>
            <div className = "project-wrapper" id="project-right">
                <img className="project-img" src={placeholder}/>
                <div className = "project-box">
                    <div className="header underline">
                        <h1>Project ???</h1>
                    </div>
                    <p>Suspendisse potenti. Etiam id consectetur ligula. Nullam vel purus pharetra, posuere magna ut, 
                        eleifend nisi. Suspendisse vel risus et justo commodo tincidunt. Fusce eget porttitor neque.
                        Duis lacus purus, sollicitudin nec rhoncus elementum, ultrices eu dolor. Pellentesque aliquet facilisis diam eu auctor.
                        Donec sed ullamcorper lorem, sed ultrices urna. Aliquam erat volutpat. In hac habitasse platea dictumst. 
                    </p>
                    <ul>
                        <li>Reactjs</li>
                        <li>Nodejs</li>
                        <li>MongoDB</li>
                        <li>Expressjs</li>
                    </ul>
                </div>
            </div>
            <div className = "project-wrapper">
                <div className = "project-box">
                    <div className="header underline">
                        <h1>Project ???</h1>
                    </div>
                    <p>Suspendisse potenti. Etiam id consectetur ligula. Nullam vel purus pharetra, posuere magna ut, 
                        eleifend nisi. Suspendisse vel risus et justo commodo tincidunt. Fusce eget porttitor neque.
                        Duis lacus purus, sollicitudin nec rhoncus elementum, ultrices eu dolor. Pellentesque aliquet facilisis diam eu auctor.
                        Donec sed ullamcorper lorem, sed ultrices urna. Aliquam erat volutpat. 
                    </p>
                    <ul>
                        <li>???</li>
                        <li>???</li>
                        <li>???</li>
                    </ul>
                </div>
                <img className="project-img" src={placeholder}/>
            </div>
        </div>
    )
}