import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

export default function SocialMedia() {
  return (
    <div>
      <div class="social-links">
        <Fade bottom>
          <a href="mailto:victorjohyoshida@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a href="https://github.com/vjy02" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/victor-yoshida-140617243/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
          <div className="vl"></div>
        </Fade>
      </div>
    </div>
  );
}
