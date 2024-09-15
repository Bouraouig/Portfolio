import About from "./Components/About";
import Contact from "./Components/Contact";
import Card from "./Components/Reusible/Card";
import Carousel from "./Components/Carousel";

import logo from "./logo.svg";
import Experience from "./Components/Experience";
// import "./App.css";

function App() {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <div id="About">
        <About />
      </div>
      <div className="p-2 w-[90%] m-auto">
        <Experience />
      </div>

      <div className="p-2 w-[90%] m-auto">
        <p className="p-2 text-5xl font-semibold my-2 ">Projects</p>
        <Carousel />
      </div>
      {/* <Card /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
