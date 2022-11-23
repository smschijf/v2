import portrait from "../assets/img/portrait.png";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import sass from "../assets/icons/sass.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import github from "../assets/icons/github.svg";
import cv from "../assets/files/cv_092022.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  Aos.init();
  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMeBio" data-aos="fade-up" data-aos-once="true">
        <h2>Over Mij ☕</h2>
        <p>
          Ten eerste, bedankt voor het scrollen tot hier! Ik ben een tech
          enthusiast met een interesse voor web development. Tijdens mijn
          opleiding heb ik aan verschillende projecten gewerkt, maar mijn
          belangstelling ligt toch bij front-end development. Voor meer
          informatie over mijn achtergrond, download mijn{" "}
          <a href={cv} target="_blank" rel="noreferrer" download>
            cv
          </a>
          .
        </p>
        <p>
          Naast coderen besteed ik mijn tijd aan het spelen van{" "}
          <a
            href="https://steamcommunity.com/id/sh4ndes/"
            target="_blank"
            rel="noreferrer"
          >
            games
          </a>{" "}
          en het kijken van{" "}
          <a
            href="https://myanimelist.net/profile/sh4ndes"
            target="_blank"
            rel="noreferrer"
          >
            anime
          </a>
          . 👾 Ook kijk ik veel Youtube videos over van alles en nog wat :D
        </p>
      </div>
      <div className="aboutMeImage" data-aos="fade-up" data-aos-once="true">
        <img src={portrait} alt="portrait"></img>
      </div>
      <div className="aboutMeToolkit" data-aos="fade-up" data-aos-once="true">
        <h2>Mijn Toolkit 💻</h2>
        <ul>
          <li>
            <img src={html} alt="html" />
            HTML5
          </li>
          <li>
            <img src={css} alt="css" />
            CSS3
          </li>
          <li>
            <img src={sass} alt="sass" />
            Sass
          </li>
          <li>
            <img src={javascript} alt="javascript" />
            Javascript
          </li>
          <li>
            <img src={react} alt="react" />
            React
          </li>
          <li>
            <img src={github} alt="github" />
            GitHub
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
