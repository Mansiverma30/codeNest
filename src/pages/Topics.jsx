import TerminalInput from "../components/TerminalInput";
import TerminalLayout from "../components/TerminalLayout";
import { useState, useEffect } from "react";

function Topics() {
  const terminalLines = [
    "📚 Launching Topic Navigator...",
    "🔍 Scanning for beginner-friendly content...",
    "🧩 Organizing HTML and CSS modules...",
    "🎯 Ready to deep dive into frontend fundamentals!",
    " ",
    `You can run several commands:`,
    `<span class='text-green-400'>    html</span> <br/> <span class='text-zinc-300 ml-4'>   Craft the skeleton of your web pages with semantic HTML.</span>
    <span class='text-green-400'>css</span> <br/> <span class='text-zinc-300 ml-4'>    Style your websites beautifully using CSS — from layout to animation.</span>
    <span class='text-green-400'>help</span> 
   <span class='text-zinc-300 ml-4'>    Get list of all commands</span>
    <span class='text-green-400'>clear</span> 
   <span class='text-zinc-300 ml-4'>    Wipe the terminal screen</span>
   <span class='text-green-400'> home</span> 
   <span class='text-zinc-300 ml-4'>    Go back to the home page</span>
    ` /* <span class='text-green-400'>javascript</span> <br/> <span class='text-zinc-300 ml-4'>    Bring your pages to life by adding logic and interactivity with JavaScript.</span> */,
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
      <div className="px-4 py-2 text-white font-mono text-left whitespace-pre space-y-1 overflow-auto">
        {allLines.map((line, idx) => (
          <div key={idx} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </div>
      <TerminalInput />
    </TerminalLayout>
  );
}

export default Topics;
