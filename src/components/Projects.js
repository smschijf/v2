import FightingGame from "../assets/img/fightingGame.png";
import drawingApp from "../assets/img/drawingApp.png";
import contactPage from "../assets/img/contactPage.png";

const Projects = () => {
  return (
    <>
      <span className="noteText">
        hover over een project voor meer informatie!
      </span>
      <section className="projects" id="projects">
        <div className="projectsRow">
          <div className="projectsCard">
            <img src={FightingGame} alt="fighting game"></img>
            <div className="projectsOverlay">
              <h3>Fighting Game</h3>
              <p>Simpele javascript game waarbij je twee spelers kan besturen met het toetsenbord.</p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>PHP</li>
              </ul>
              <div className="viewProject">
                <a href="https://u210578.gluweb.nl/fighting-game/" target="_blank" className="button" role="button" rel="noreferrer">
                  view live
                </a>
                <a href="https://github.com/smschijf/fighter-game" target="_blank" className="button" role="button" rel="noreferrer">
                  github
                </a>
              </div>
            </div>
          </div>
          <div className="projectsCard">
            <img src={drawingApp} alt="drawing app"></img>
            <div className="projectsOverlay">
              <h3>Teken App</h3>
              <p>Simpele teken applicatie met een aantal simpele functies. Dit was een oefening met het HTML canvas element en bijbehorende javascript functies.</p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <div className="viewProject">
                <a href="https://u210578.gluweb.nl/drawing-app/" target="_blank" className="button" role="button" rel="noreferrer">
                  view live
                </a>
                <a href="https://github.com/smschijf/drawing-app" target="_blank" className="button" role="button" rel="noreferrer">
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projectsRow">
          <div className="projectsCard">
            <img src={contactPage} alt="contact page"></img>
            <div className="projectsOverlay">
              <h3>Contact Pagina</h3>
              <p>Schoolopdracht voor de front-end van de contact pagina van Vrijwilligershuis Nieuwegein. Hierbij heb ik samengewerkt met twee andere klasgenoten.</p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
              </ul>
              <div className="viewProject">
                <a href="./" target="_blank" className="button" role="button" rel="noreferrer">
                  view live
                </a>
                <a href="https://github.com/CcharlotteHh/VrijwilligersHuis_Nieuwegein" target="_blank" className="button" role="button" rel="noreferrer">
                  github
                </a>
              </div>
            </div>
          </div>
          <div className="projectsCard">
            <img src={FightingGame} alt="fighting game"></img>
            <div className="projectsOverlay">
              <h3>Lorem Ipsum</h3>
              <p>Lorem Ipsum</p>
              <ul className="toolsUsed">
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
              </ul>
              <div className="viewProject">
                <a href="./" target="_blank" className="button" role="button" rel="noreferrer">
                  view live
                </a>
                <a href="./" target="_blank" className="button" role="button" rel="noreferrer">
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
