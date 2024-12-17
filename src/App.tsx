import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import { ThemeProvider } from "./ThemeContext";
import ThemeManager from "./ThemeManager";

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
      </ThemeProvider>
    </>
  );
}

export default App;
