import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Hero />
        <main>
            <Projects />
            <AboutMe />
        </main>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
