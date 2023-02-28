import placeholder from './images/comingsoon.png';
export default function Projects() {
    return(
    <div>
        <div id="project-container">
            <div className = "project-wrapper">
                <div className = "project-box">
                    <h2>Project 1</h2>
                </div>
                <img className="project-img" src={placeholder}/>
            </div>
            <div className = "project-wrapper" id="project-right">
                <img className="project-img" src={placeholder}/>
                <div className = "project-box">
                    <h2>Project 2</h2>
                </div>
            </div>
            <div className = "project-wrapper">
                <div className = "project-box">
                    <h2>Project 3</h2>
                </div>
                <img className="project-img" src={placeholder}/>
            </div>
        </div>
    </div>
    )
}