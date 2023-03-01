import placeholder from './images/comingsoon.png';
import project1 from './images/project1.PNG';
export default function Projects() {
    return(
    <div>
        <div id="project-container">
            <div className = "project-wrapper">
                <div className = "project-box">
                    <div className="header underline">
                        <h1>Gaming Quiz Game</h1>
                    </div>
                    <p>My first Reactjs project, I put this first as it marked the start of my journey
                            as a developer. The web application uses React hooks and states
                            to properly track the quiz game. Questions and answers are gathered from an external API and a new
                            set is generated each time. The quiz theme surrounds gaming, but I plan to remake this project
                            with a choice of difficulty, number of questions and theme. I also plan to make a more aesthetically aligned
                            website, but I was more focused on functionality for my first project.
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
                        Donec sed ullamcorper lorem, sed ultrices urna. Aliquam erat volutpat. In hac habitasse platea dictumst. Curabitur efficitur scelerisque dolor,
                        a lobortis libero rutrum et. Ut sit amet porttitor tortor. Phasellus eleifend, velit eget rhoncus ultricies, tortor metus laoreet magna, a bibendum 
                        nisl dui vel quam.
                    </p>
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
                        Donec sed ullamcorper lorem, sed ultrices urna. Aliquam erat volutpat. In hac habitasse platea dictumst. Curabitur efficitur scelerisque dolor,
                        a lobortis libero rutrum et. Ut sit amet porttitor tortor. Phasellus eleifend, velit eget rhoncus ultricies, tortor metus laoreet magna, a bibendum 
                        nisl dui vel quam.
                    </p>
                </div>
                <img className="project-img" src={placeholder}/>
            </div>
        </div>
    </div>
    )
}