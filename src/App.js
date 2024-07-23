import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App mx-auto">
      <Navbar />
      <div className="wrapper flex md:flex-col">
        <div className="left-sec w-full lg:max-w-[50%] md:max-w-[100%] md:h-[500px] lg:h-[100%]"></div>
        <div className="right-sec w-full lg:max-w-[50%] pt-28 	text-white md:px-16 px-4 md:max-w-[100%]">
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
