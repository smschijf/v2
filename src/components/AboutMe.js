import aboutMe from '../assets/img/avatar.png';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import sass from '../assets/icons/sass.svg';
import javascript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import github from '../assets/icons/github.svg';

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMeBio">
        <h2>About Me ☕</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique magna sit amet purus gravida.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique magna sit amet purus gravida.</p>
      </div>
      <div className="aboutMeImage">
        <img src={aboutMe} alt="portrait"></img>
      </div>
      <div className="aboutMeToolkit">
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