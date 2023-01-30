import "./Footer.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid footer-element d-flex justify-content-center align-items-end">
        <div className="row social-media">
          <a className="col-4" href="https://github.com/Hugooloya">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="col-4" href="https://www.linkedin.com/in/hugooloya/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="col-4" href="https://www.instagram.com/hugooloya/">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
        </div>
      </footer>
    </>
  );
}
