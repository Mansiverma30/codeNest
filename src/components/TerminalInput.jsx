import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function TerminalInput() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleCommand = (command) => {
    const trimmed = command.trim().toLowerCase();
    let output = "";

    switch (trimmed) {
      case "about":
        output = "CodeNest is an interactive learning terminal for developers.";
        break;
      case "help":
        output = "Available commands: about, features, help, socials";
        break;
      case "socials":
        output = `Find me on <a class="text-blue-300 underline" href="https://github.com/Mansiverma30" target="_blank">GitHub</a>, <a class="text-blue-300 underline" href="https://www.linkedin.com/in/mansi-verma-213288278" target="_blank">LinkedIn</a>, & <a class="text-blue-300 underline" href="https://www.instagram.com/mansiv30/" target="_blank">Instagram</a>`;
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
      case "playground":
        navigate("/editor");
        return;
      case "html":
        navigate("/html");
        return;
      case "css":
        navigate("/css");
        return;
      case "home":
        navigate("/");
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

export default TerminalInput;
