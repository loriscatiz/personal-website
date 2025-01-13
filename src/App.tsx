import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import { ThemeProvider } from './ThemeContext';
import ThemeManager from './ThemeManager';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <ThemeProvider>
                <ThemeManager />
                <Header />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Timeline />
                <Contact />
            </ThemeProvider>
        </>
    );
}

export default App;
