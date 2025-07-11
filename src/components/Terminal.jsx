import { useState, useEffect } from "react";
import TerminalInput from "./TerminalInput";
import TerminalLayout from "./TerminalLayout";

function Terminal() {
  const terminalLines = [
    "Welcome to CodeNest 🐣",
    "Booting up the system...",
    "Loading interactive modules...",
    "Fetching your curiosity levels...",
    " ",
    `You can run several commands:`,
    `<span class='text-green-400'>    about</span> <br/> <span class='text-zinc-300 ml-4'>    Learn what CodeNest is.</span>
    <span class='text-green-400'>socials</span> <br/> <span class='text-zinc-300 ml-4'>    Find me on Social Media.</span> 
    <span class='text-green-400'>help</span> <br/> <span class='text-zinc-300 ml-4'>    Get all commands.</span>
    <span class='text-green-400'>clear</span> <br/> <span class='text-zinc-300 ml-4'>    Clear the terminal.</span>
    <span class='text-green-400'>topics</span> 
   <span class='text-zinc-300 ml-4'>  Go to the topics page</span>
    <span class='text-green-400'>playground</span> 
   <span class='text-zinc-300 ml-4'>  Go to the live editor page</span>
   `,
    " ",
    "Type a command to get started 🧠💻",
    `<span class='text-purple-400'>user@codenest:</span>`,
  ];

  const [allLines, setAllLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      const timeout = setTimeout(() => {
        setAllLines((prev) => [...prev, terminalLines[lineIndex]]);
        setLineIndex((prev) => prev + 1);
      }, getDelay(lineIndex));

      return () => clearTimeout(timeout);
    }
  }, [lineIndex]);

  function getDelay(index) {
    if (index < 4) return 0;
    if (index === 4) return 1000;
    if (index === 5) return 0;
    if (index === 6) return 0;
    if (index === 7) return 1000;
    return 600;
  }

  return (
    <TerminalLayout>
      <div className="px-4 py-2 text-white font-mono text-left whitespace-pre space-y-1">
        {allLines.map((line, idx) => (
          <div key={idx} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </div>
      <TerminalInput />
    </TerminalLayout>
  );
}

export default Terminal;
