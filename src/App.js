import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
        <Hero />
        <main>
            <Projects />
            <AboutMe />
        </main>
    </div>
  );
}

export default App;
