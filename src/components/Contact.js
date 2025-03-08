// src/components/Contact.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import from free-solid-svg-icons

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <a href="mailto:philhadj@yahoo.com">
          <FontAwesomeIcon icon={faEnvelope} /> philhadj@yahoo.com
        </a>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 07.77.96.28.04
        </p>
        <a
          href="https://github.com/VotreNomUtilisateurGitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/VotreNomUtilisateurLinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
