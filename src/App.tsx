import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import { ThemeProvider } from './ThemeContext';
import ThemeManager from './ThemeManager';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default App;
