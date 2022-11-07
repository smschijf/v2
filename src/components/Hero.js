import Avatar from '../assets/img/avatar.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="heroText">
                <h1>Hey! Ik ben Sander. 👋</h1>
                <p>
                    Een gedreven <span>developer</span> met 
                    een passie voor het maken van front-end applicaties. ✨
                </p>
                <p>
                    Momenteel student bij het <a href="https://www.glu.nl" target="_blank" rel="noreferrer"> Grafisch Lyceum Utrecht</a>. 👨🏻‍💻
                </p>
                <p>
                    <span className="smallerText">Psst! mijn portfolio is een WIP, dus bekijken op desktop is het beste voor nu!</span>
                </p>
            </div>
            <div className="heroImage">
                <img src={Avatar} alt="avatar"></img>
            </div>
        </section>
    );
}

export default Hero;