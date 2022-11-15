import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contactContainer">
        <div className="contactInformation">
          <h2>Neem Contact Op! 📝</h2>
          <p>
            Je kan mij vinden op social media, of je kan mij hier een bericht
            sturen!
          </p>
          <ul className="contactIcons">
            <li>
              <a href="https://www.linkedin.com/in/sander-schijf-90b70a242/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/smschijf">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://github.com/smschijf">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
        <div className="contactForm">
          <form action="#" method="post" name="contact">
            <label htmlFor="name" className="hidden">
              naam
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="naam"
              autoComplete="off"
              required
            />
            <label htmlFor="email" className="hidden">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
            />
            <label htmlFor="message" className="hidden">
              bericht
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="bericht"
              required
            ></textarea>
            <div className="submitContainer">
              <button type="submit" className="button">
                verzend bericht
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
