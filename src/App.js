import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
