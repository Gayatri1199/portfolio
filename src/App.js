import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="App mx-auto">
      <Navbar />
      <div className="wrapper flex">
        <div className="left-sec w-full max-w-[50%] "></div>
        <div className="right-sec w-full max-w-[50%] pt-28 	text-white px-16">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default App;
