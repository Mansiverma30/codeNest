import "./App.css";
import Terminal from "./components/Terminal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topics from "./pages/Topics";
import TerminalL from "./components/TerminalLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/terminal" element={<TerminalL />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
