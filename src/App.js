import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App mx-auto">
      <Navbar />
      <div className="wrapper flex">
        <div className="left-sec w-full max-w-[50%] "></div>
        <div className="right-sec w-full max-w-[50%] pt-28 bg-sky-950	text-white px-16">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
