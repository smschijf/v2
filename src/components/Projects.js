import FightingGame from "../assets/img/fightingGame.png";

const Projects = () => {
  return (
    <>
      <span className="noteText">
        hover over een project voor meer informatie!
      </span>
      <section className="projects">
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
                <a href="https://u210578.gluweb.nl/fighting-game/" target="_blank" className="button">
                  view live
                </a>
                <a href="https://github.com/smschijf/fighter-game" target="_blank" className="button">
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
                <a href="./" target="_blank" className="button">
                  view live
                </a>
                <a href="./" target="_blank" className="button">
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projectsRow">
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
                <a href="./" target="_blank" className="button">
                  view live
                </a>
                <a href="./" target="_blank" className="button">
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
                <a href="./" target="_blank" className="button">
                  view live
                </a>
                <a href="./" target="_blank" className="button">
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
