import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import { ThemeProvider } from "./ThemeContext";
import ThemeManager from "./ThemeManager";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeManager />
        <Header></Header>
        <Hero></Hero>

        <About
          title="About me"
          subtitle="a passionate developer"
          img={"https://picsum.photos/id/1043/800/600"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vel rem enim laborum amet placeat voluptatibus minus atque veniam, velit hic ut! Veritatis alias iste atque voluptas quasi sapiente ipsum!"
          }
          ctaText={"Click me"}
          ctaHref={"#testing"}
        ></About>
<Projects></Projects>
      </ThemeProvider>
    </>
  );
}

export default App;
