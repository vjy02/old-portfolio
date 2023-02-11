
import headshot from './images/headshot.jpg';
export default function AboutMe() {
  return (
        <div id="about-me-container" >
          <div className="a-card bg"></div>
          <div className="box">
            <img src={headshot} />
          </div>
          <div id="about-info">
            <h2>About Me</h2>
            <p>
              Aliquam sed velit venenatis, bibendum ipsum in, imperdiet nisl.
              Phasellus efficitur posuere purus et fermentum. In non urna lacus.
              Pellentesque sit amet libero facilisis augue porttitor bibendum in vel
              sapien. Cras congue enim a augue commodo, sit amet consequat magna
              condimentum. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Sed at metus quam.
            </p>
            <div class="wrapper">
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
        </div>

  );
}
