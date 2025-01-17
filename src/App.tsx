import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import { ThemeProvider } from './contexts/theme-context/ThemeContext';
import ThemeManager from './contexts/theme-context/ThemeManager';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { ModalProvider } from './contexts/ModalContext';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <ThemeProvider>
                <ThemeManager />
                <ModalProvider>
                <Header />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Timeline />
                <Contact />
                <Footer />
                <PrivacyPolicyModal />
                </ModalProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
