import { useState, useEffect } from "react";

function Terminal() {
  const terminalLines = [
    "Welcome to CodeNest 🐣",
    "Booting up the system...",
    "Loading interactive modules...",
    "Fetching your curiosity levels...",
    " ",
    "You can run several commands:",
    "<span class='text-green-400'> about</span>",
    "<span class='text-zinc-300 ml-4'> Learn what CodeNest is and why it exists.</span>",
    "<span class='text-green-400'> features</span>",
    "<span class='text-zinc-300 ml-4'> Explore the features of this learning terminal.</span>",
    "<span class='text-green-400'> learn</span>",
    "<span class='text-zinc-300 ml-4'> Access interactive coding lessons and challenges.</span>",
    "<span class='text-green-400'> socials</span>",
    "<span class='text-zinc-300 ml-4'> Find me on GitHub, LinkedIn & other platforms.</span>",
    "<span class='text-green-400'> help</span>",
    "<span class='text-zinc-300 ml-4'> Get tips on how to navigate CodeNest.</span>",
    " ",
    "Type a command to get started 🧠💻",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [allLines, setAllLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      const currentLine = terminalLines[lineIndex];
      if (charIndex <= currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentLine.slice(0, charIndex));
          setCharIndex((prev) => prev + 1);
        }, 10);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setAllLines((prev) => [...prev, currentLine]);
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
          setDisplayedText("");
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsTyping(false);
    }
  }, [charIndex, lineIndex]);

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

            {isTyping ? (
              <div>
                <span dangerouslySetInnerHTML={{ __html: displayedText }} />
                <span className="animate-pulse text-purple-400">|</span>
              </div>
            ) : (
              <div className="text-green-400">
                user@codenest:~$ <span className="animate-pulse">|</span>
              </div>
            )}
            {!isTyping && (
              <div className="mt-4 flex justify-center animate-fade-in-slow">
                <button
                  className="b font-semibold  transition  shadow-md cursor-pointer mt-8 text-center bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 py-2 rounded-md  dark:shadow-[0_0_10px_#a855f7] hover:scale-105 active:scale-95 duration-200"
                  onClick={() => {
                    document
                      .getElementById("main-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start Learning
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
