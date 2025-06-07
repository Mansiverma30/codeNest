import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  best,
  boxModel,
  colorsFonts,
  display,
  elementControlSquad,
  flexbox,
  idVsClass,
  intro,
  textStyling,
  units,
} from "./content";

function HtmlTerminalInput() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleCommand = (command) => {
    const trimmed = command.trim().toLowerCase();
    let output = "";

    switch (trimmed) {
      case "help":
        output =
          "Available commands: home, topics,  intro, box model, id vs class, display, 'colors, themes, and fonts', element control squad, text styling, flexbox, units, & best practices, & clear";
        break;
      case "":
        setInput("");
        return;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "topics":
        navigate("/topics");
        return;
      case "home":
        navigate("/");
        return;
      case "intro":
        setHistory((prev) => [...prev, "> intro", ...intro]);
        setInput("");
        return;
      case "box model":
        setHistory((prev) => [...prev, "> box model", ...boxModel]);
        setInput("");
        return;
      case "id vs class":
        setHistory((prev) => [...prev, "> id vs class", ...idVsClass]);
        setInput("");
        return;
      case "display":
        setHistory((prev) => [...prev, "> display", ...display]);
        setInput("");
        return;
      case "colors, themes, and fonts":
        setHistory((prev) => [
          ...prev,
          "> colors, themes, and fonts",
          ...colorsFonts,
        ]);
        setInput("");
        return;
      case "element control squad":
        setHistory((prev) => [
          ...prev,
          "> element control squad",
          ...elementControlSquad,
        ]);
        setInput("");
        return;
      case "text styling":
        setHistory((prev) => [...prev, "> text styling", ...textStyling]);
        setInput("");
        return;
      case "flexbox":
        setHistory((prev) => [...prev, "> flexbox", ...flexbox]);
        setInput("");
        return;
      case "units":
        setHistory((prev) => [...prev, "> units", ...units]);
        setInput("");
        return;
      case "best practices":
        setHistory((prev) => [...prev, "> best practices", ...best]);
        setInput("");
        return;
      case "html":
        navigate("/html");
        return;
      case "javascript":
        navigate("/js");
        return;
      default:
        output = `command not found: <span class="text-red-400">${command}</span>`;
    }

    setHistory((prev) => [...prev, `> ${command}`, output]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="w-full p-2 pb-4 font-mono text-white rounded-md shadow-lg"
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <div
          key={i}
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: line }}
        />
      ))}

      <div className="flex">
        <span className="mr-2">{">"}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none text-white w-full"
        />
      </div>
    </div>
  );
}

export default HtmlTerminalInput;
