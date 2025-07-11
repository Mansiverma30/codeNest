import TerminalLayout from "../../components/TerminalLayout";
import HtmlTerminalInput from "./HtmlTerminalInput";
import { useState, useEffect } from "react";

function Html() {
  const terminalLines = [
    "Initializing learning environment...",
    "Spinning up HTML modules...",
    "Setting up developer energy levels... ☕",
    " ",
    `You can run the following commands:`,
    `<span class='text-green-400'>    home</span> 
   <span class='text-zinc-300 ml-4'>    Go back to the home page</span>`,
    `<span class='text-green-400'>    topics</span> 
   <span class='text-zinc-300 ml-4'>    Go back to the topics page</span>`,
    `<span class='text-green-400'>    playground</span> 
   <span class='text-zinc-300 ml-4'>    Go back to the live editor page</span>`,
    `<span class='text-green-400'>    intro, 'tags and attributes', text, link, layout, forms, table, multi media, & best practices</span>` /* <br class='sm:hidden block/>' */,
    `<span class='text-green-400'>    help</span> 
   <span class='text-zinc-300 ml-4'>    Get list of all commands</span>`,
    `<span class='text-green-400'>    clear</span> 
   <span class='text-zinc-300 ml-4'>    Wipe the terminal screen</span>`,
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
      <div className="px-4 py-2 text-white font-mono text-left whitespace-pre space-y-1 ">
        {allLines.map((line, idx) => (
          <div key={idx} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </div>
      <HtmlTerminalInput />
    </TerminalLayout>
  );
}

export default Html;
