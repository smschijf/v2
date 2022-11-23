import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_45qy4fr",
        "template_1dl1lwj",
        form.current,
        "Qh_pqNyxGDShxesuQ"
      )
      .then(
        (result) => {
          let modal = document.querySelector(".confirmationModal");
          let closeModal = document.querySelector(".modalClose");

          console.log(result.text);
          e.target.reset();
          modal.style.display = "block";
          closeModal.onclick = () => {
            modal.style.display = "none";
          };
          window.onclick = (e) => {
            if (e.target === modal) {
              modal.style.display = "none";
            }
          };
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  Aos.init();

  return (
    <section className="contact" id="contact" data-aos="fade-up" data-aos-once="true">
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
          <form ref={form} onSubmit={sendEmail} name="contact">
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
              <div className="confirmationModal">
                <div className="modalContent">
                  <span className="modalClose">&times;</span>
                  <h2>Succes!</h2>
                  <p>
                    Het formulier is succesvol verstuurd. Bedankt voor je
                    interesse! Je kan een reactie verwachten binnen een aantal
                    dagen.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
