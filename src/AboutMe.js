
import headshot from './images/headshot.jpg';
export default function AboutMe() {
  return (
      <div className="section">
        <div className="header">
          <h1>Code, Creativity, and Me</h1>
        </div>
        <div id="about-me-container">
          <div id="about-info">
              <p>
                Aliquam sed velit venenatis, bibendum ipsum in, imperdiet nisl.
                Phasellus efficitur posuere purus et fermentum. In non urna lacus.
                Pellentesque sit amet libero facilisis augue porttitor bibendum in vel
                sapien. Cras congue enim a augue commodo, sit amet consequat magna
                condimentum. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Sed at metus quam.
              </p>
              <div>
                <ul>
                  <li>Reactjs</li>
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                </ul>
                <ul>
                  <li>Python</li>
                  <li>C</li>
                  <li>Java</li>
                  <li>SQL</li>
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
