import Hero from "./components/Hero";
import Header from "./components/Header";
import { ThemeProvider } from "./ThemeContext";
import ThemeManager from "./ThemeManager";



function App() {
  return (
    <>
      <ThemeProvider>
      <ThemeManager />
      <Header></Header>
      <Hero></Hero>
      </ThemeProvider>
    </>
  );
}

export default App;
