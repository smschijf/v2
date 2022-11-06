const Hero = () => {
    return (
        <section>
            <div className="heroText">
                <h1>Hey! Ik ben Sander. 👋</h1>
                <p>
                    Een gedreven
                    <span>developer</span>
                    met een passie voor het maken van front-end applicaties. ✨
                </p>
                <p>
                    Momenteel een student bij het
                    <a href="https://www.glu.nl" target="_blank" rel="noreferrer">Grafisch Lyceum Utrecht</a>
                </p>
            </div>
            <div className="heroImage">
                <img src="./" alt="profile"></img>
            </div>
        </section>
    );
}

export default Hero;