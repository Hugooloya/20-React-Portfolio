import "./Footer.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <div className="container d-flex flex-row justify-content-center align-baseline align-text-bottom social-media">
          <a href="https://github.com/Hugooloya">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://github.com/Hugooloya">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://github.com/Hugooloya">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </>
  );
}
