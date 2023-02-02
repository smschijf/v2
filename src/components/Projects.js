import FightingGame from "../assets/img/fightingGame.png";
import drawingApp from "../assets/img/drawingApp.png";
import contactPage from "../assets/img/contactPage.png";
import todoApp from "../assets/img/todoApp.png";
import filmBuddy from "../assets/img/filmBuddy.png";

const Projects = () => {
  return (
    <>
      <span className="noteText">
        hover over een project voor meer informatie!
      </span>
      <section className="projects" id="projects">
        <div className="projectsRow">
          <div
            className="projectsCard"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <img src={FightingGame} alt="fighting game"></img>
            <div className="projectsOverlay">
              <h3>Fighting Game</h3>
              <p>
                Simpele javascript game waarbij je twee spelers kan besturen met
                het toetsenbord.
              </p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>PHP</li>
              </ul>
              <div className="viewProject">
                <a
                  href="http://84.107.183.106/fighting-game/"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  view live
                </a>
                <a
                  href="https://github.com/smschijf/fighter-game"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  github
                </a>
              </div>
            </div>
          </div>
          <div
            className="projectsCard"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <img src={drawingApp} alt="drawing app"></img>
            <div className="projectsOverlay">
              <h3>Teken App</h3>
              <p>
                Teken web applicatie met een aantal simpele functies. Dit was
                een oefening met het HTML canvas element en bijbehorende
                javascript functies.
              </p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <div className="viewProject">
                <a
                  href="http://84.107.183.106/drawing-app/"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  view live
                </a>
                <a
                  href="https://github.com/smschijf/drawing-app"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projectsRow">
          <div
            className="projectsCard"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <img src={contactPage} alt="contact page"></img>
            <div className="projectsOverlay">
              <h3>Contact Pagina</h3>
              <p>
                Schoolopdracht voor de front-end van de contact pagina van
                Vrijwilligershuis Nieuwegein. Hierbij heb ik samengewerkt met
                twee andere klasgenoten.
              </p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
              </ul>
              <div className="viewProject">
                {/* eslint-disable-next-line */}
                <a
                  href="https://u210578.gluweb.nl/vhnieuwegein/"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  view live
                </a>
                <a
                  href="https://github.com/CcharlotteHh/VrijwilligersHuis_Nieuwegein"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  github
                </a>
              </div>
            </div>
          </div>
          <div
            className="projectsCard"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <img src={todoApp} alt="todo app"></img>
            <div className="projectsOverlay">
              <h3>Todo App</h3>
              <p>Todo web applicatie met CRUD systeem.</p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
              </ul>
              <div className="viewProject">
                <a
                  href="https://u210578.gluweb.nl/todocrud/"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  view live
                </a>
                <a
                  href="https://github.com/smschijf/php-todo-crud"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projectsRow">
          <div
            className="projectsCard"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <img src={filmBuddy} alt="contact page"></img>
            <div className="projectsOverlay">
              <h3>Film Buddy</h3>
              <p>
                Een web applicatie waarin informatie wordt opgehaald over films
                en tv series met themoviedb API. Er is een zoekfunctie
                geimplementeerd, en je kan films/series toevoegen aan je
                watchlist.
              </p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>Tailwind CSS</li>
                <li>React</li>
                <li>Swiper</li>
                <li>Axios</li>
              </ul>
              <div className="viewProject">
                {/* eslint-disable-next-line */}
                <a
                  href="https://film-buddy.pages.dev/"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  view live
                </a>
                <a
                  href="https://github.com/smschijf/film-buddy"
                  target="_blank"
                  className="button"
                  role="button"
                  rel="noreferrer"
                >
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
