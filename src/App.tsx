import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import { ThemeProvider } from './ThemeContext'
import ThemeManager from './ThemeManager'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
    return (
        <>
            <ThemeProvider>
                <ThemeManager />
                <Header></Header>
                <Hero></Hero>

                <About></About>
                <Projects></Projects>
                <Skills></Skills>
            </ThemeProvider>
        </>
    )
}

export default App
