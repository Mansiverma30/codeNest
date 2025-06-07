import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  best,
  forms,
  intro,
  layout,
  links,
  lists,
  media,
  tables,
  tags,
  text,
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
          "Available commands: home, topics, intro, tags and attributes, text, lists, link, layout, forms, table, multi media, best practices, & clear";
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
      case "tags and attributes":
        setHistory((prev) => [...prev, "> tags and attributes", ...tags]);
        setInput("");
        return;
      case "text":
        setHistory((prev) => [...prev, "> text", ...text]);
        setInput("");
        return;
      case "lists":
        setHistory((prev) => [...prev, "> lists", ...lists]);
        setInput("");
        return;
      case "link":
        setHistory((prev) => [...prev, "> link", ...links]);
        setInput("");
        return;
      case "layout":
        setHistory((prev) => [...prev, "> layout", ...layout]);
        setInput("");
        return;
      case "forms":
        setHistory((prev) => [...prev, "> forms", ...forms]);
        setInput("");
        return;
      case "table":
        setHistory((prev) => [...prev, "> table", ...tables]);
        setInput("");
        return;
      case "multi media":
        setHistory((prev) => [...prev, "> multi media", ...media]);
        setInput("");
        return;
      case "best practices":
        setHistory((prev) => [...prev, "> best practices", ...best]);
        setInput("");
        return;
      case "css":
        navigate("/css");
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
