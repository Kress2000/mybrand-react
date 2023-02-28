import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About'

function App() {
  const [cursorClass, setcursorClass] = useState(null);
  const [attribute, setAttribute] = useState({});

  const cursorstyls = (e) => {
    setAttribute({
      top: e.pageY - 10 + "px",
      left: e.pageX - 10 + "px",
    });
  };
  const cursorFunctionality = () => {
    setcursorClass("expand");
    console.log("clickd");
    setTimeout(() => {
      setcursorClass(null);
    }, 500);
  };
  useEffect(() => {
    document.addEventListener("mousemove", (e) => cursorstyls(e));
    return document.removeEventListener("mousemove", (e) => cursorstyls(e));
  }, [attribute]);

  useEffect(() => {
    document.addEventListener("click", cursorFunctionality);
    return document.removeEventListener("click", cursorFunctionality);
  }, []);

  return (
    <div className="App">
      <div className={`cursor ${cursorClass}`} style={attribute}>
        <div className="point"></div>
      </div>
      <div className="small-nav" id="small-nav"></div>
      <div>
        <Navbar  />
        <HomePage />
        <About />
      </div>
    </div>
  );
}

export default App;
