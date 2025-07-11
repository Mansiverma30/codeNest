import "./App.css";
import Terminal from "./components/Terminal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topics from "./topics/Topics";
import TerminalL from "./components/TerminalLayout";
import Html from "./topics/html/Html";
import Css from "./topics/css/Css";
import Editor from "./codeEditor/Editor";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/terminal" element={<TerminalL />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
