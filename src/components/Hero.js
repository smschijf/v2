import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../assets/img/avatar.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  Aos.init();
  return (
    <section className="hero" data-aos="fade-up" data-aos-once="true">
      <div className="heroText">
        <h1>Hey! Ik ben Sander. 👋</h1>
        <p>
          Een gedreven <span>developer</span> met een passie voor het maken van
          front-end applicaties. ✨
        </p>
        <p>
          Momenteel student bij het{" "}
          <a href="https://www.glu.nl" target="_blank" rel="noreferrer">
            {" "}
            Grafisch Lyceum Utrecht
          </a>
          . 👨🏻‍💻
        </p>
        {/* <p>
          <span className="smallerText">
            Psst! mijn portfolio is een WIP, dus bekijken op desktop is het
            beste voor nu!
          </span>
        </p> */}
      </div>
      <div className="heroImage">
        <img src={Avatar} alt="avatar"></img>
      </div>
      <div className="scrollDownIcon">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </section>
  );
};

export default Hero;
