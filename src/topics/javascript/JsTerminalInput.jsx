import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { best, events, func, intro, variables } from "./content";

function JsTerminalInput() {
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
          "Available commands: home, topics, intro, 'variables, arrays, and objects', 'functions, conditions, and loops', 'events and dom', best practices, & clear";
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
      case "variables, arrays, and objects":
        setHistory((prev) => [
          ...prev,
          "> variables, arrays, and objects",
          ...variables,
        ]);
        setInput("");
        return;
      case "functions, conditions, and loops":
        setHistory((prev) => [
          ...prev,
          "> functions, conditions, and loops",
          ...func,
        ]);
        setInput("");
        return;
      case "events and dom":
        setHistory((prev) => [...prev, "> events and dom", ...events]);
        setInput("");
        return;
      case "best practices":
        setHistory((prev) => [...prev, "> best practices", ...best]);
        setInput("");
        return;
      case "css":
        navigate("/css");
        return;
      case "html":
        navigate("/html");
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

export default JsTerminalInput;
