import { useEffect, useRef, useState } from "react";

function TerminalInput() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  const handleCommand = (command) => {
    let output = "";
    switch (command.trim()) {
      case "about" || "About":
        output = "CodeNest is an interactive learning terminal for developers.";
        break;
      case "features" || "Features":
        output =
          "CodeNest offers typing animations, command interface, and more."; /* I've to change this */
        break;
      case "help" || "Help":
        output = "Available commands: about, features, help, socials";
        break;

      default:
        output = `command not found: ${command}`;
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
      className="w-full max-w-4xl mx-auto mt-1 p-2 font-mono text-white rounded-md shadow-lg"
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {line}
        </div>
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

export default TerminalInput;
