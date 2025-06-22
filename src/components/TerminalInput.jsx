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
      case "features":
        output = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    <section class="flex flex-col justify-between bg-transparent border border-dashed border-gray-700  rounded-lg p-4 transition-all hover:scale-[1.02] active:scale-95 duration-200">
                      <div>
                        <h2 class="text-xl text-center font-semibold text-white mb-2">Topics</h2>
                        <p class="text-gray-300 text-sm">Explore core frontend concepts like HTML and CSS — both broken down into bite-sized, beginner-friendly modules.</p>
                      </div>
                      <button id="go-to-topics" class="mt-2 text-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-[0_0_6px_rgba(255,255,255,0.1)] transition-all">Learn More</button>
                    </section>

                      <section class="flex flex-col justify-between bg-transparent border border-dashed border-gray-700  rounded-lg p-4 transition-all hover:scale-[1.02] active:scale-95 duration-200">
                      <div>
                        <h2 class="text-xl text-center font-semibold text-white mb-2">Playground</h2>
                        <p class="text-gray-300 text-sm">Practice in real-time with an in-browser code editor. Tweak, test, and experiment without leaving the page!</p>
                      </div>
                      <a href="" class="mt-2 text-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-[0_0_6px_rgba(255,255,255,0.1)] transition-all">Learn More</a>
                    </section>

                    <section class="flex flex-col justify-between bg-transparent border border-dashed border-gray-700  rounded-lg p-4 transition-all hover:scale-[1.02] active:scale-95 duration-200">
                      <div>
                        <h2 class="text-xl text-center font-semibold text-white mb-2">Progress</h2>
                        <p class="text-gray-300 text-sm">Track your learning journey with visual indicators. Know what you've mastered and what's next!</p>
                      </div>
                      <a href="" class="mt-2 text-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-[0_0_6px_rgba(255,255,255,0.1)] transition-all">Learn More</a>
                    </section>
                  </div>`;
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
      case "html":
        navigate("/html");
        return;
      case "css":
        navigate("/css");
        return;
      /* case "javascript":
        navigate("/js");
        return; */
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
