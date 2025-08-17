import "./App.css";
import ReactDOM from "react-dom";
import Home from "./Home/Home.jsx";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
