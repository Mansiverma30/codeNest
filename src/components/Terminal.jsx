import { useState, useEffect } from "react";
import TerminalInput from "./TerminalInput";

function Terminal() {
  const terminalLines = [
    "Welcome to CodeNest 🐣",
    "Booting up the system...",
    "Loading interactive modules...",
    "Fetching your curiosity levels...",
    " ",
    `You can run several commands:`,
    `<span class='text-green-400'>about</span> <br /> <span class='text-zinc-300 ml-4'>Learn what CodeNest is and why it exists.</span> <br />
   <span class='text-green-400'>features</span> <br /> <span class='text-zinc-300 ml-4'>Explore the features of this learning terminal.</span> <br />
   <span class='text-green-400'>learn</span> <br /> <span class='text-zinc-300 ml-4'>Access interactive coding lessons and challenges.</span> <br />
   <span class='text-green-400'>socials</span> <br /> <span class='text-zinc-300 ml-4'>Find me on GitHub, LinkedIn & other platforms.</span> <br />
   <span class='text-green-400'>help</span> <br /> <span class='text-zinc-300 ml-4'>Get tips on how to navigate CodeNest.</span>`,
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
    if (index < 4) return 800;
    if (index === 4) return 1000;
    if (index === 5) return 0;
    if (index === 6) return 0;
    if (index === 7) return 1000;
    return 600;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div
        id="main-section"
        className="relative w-full  max-w-4xl mx-auto mt-12 rounded-lg shadow-lg bg-gradient-to-r from-[#14141f] to-[#1e1e2f] border-b border-[#3e3e5c] "
      >
        <div className="w-full bg-[#424040] rounded-t-lg">
          <div className="absolute flex space-x-2 px-2 pt-1">
            <span className="rounded-full bg-red-500 w-3 h-3"></span>
            <span className="rounded-full bg-yellow-400 w-3 h-3"></span>
            <span className="rounded-full bg-green-500 w-3 h-3"></span>
          </div>
          <div className="text-end items-end justify-items-end font-mono text-[#9c9c9c] px-2">
            codeNest.js
          </div>
        </div>
        <div className="text-white font-mono rounded-b-lg h-[80vh] overflow-auto [&::-webkit-scrollbar]:w-3  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="p-4 text-white font-mono text-left whitespace-pre space-y-1">
            {allLines.map((line, idx) => (
              <div key={idx} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
            <TerminalInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
