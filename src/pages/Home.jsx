import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ThemeProvider } from "../context/theme";
import Typewriter from "typewriter-effect";

function Home() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const terminalLines = [
    "> Initializing CodeNest...",
    "> Loading modules...",
    "> Applying dark mode...",
    "> Starting developer playground...",
    "> Ready to launch 🚀",
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
        }, 50); // typing speed

        return () => clearTimeout(timeout);
      } else {
        // Line fully typed
        const timeout = setTimeout(() => {
          setAllLines((prev) => [...prev, currentLine]);
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
          setDisplayedText("");
        }, 500); // delay before next line starts
        return () => clearTimeout(timeout);
      }
    } else {
      setIsTyping(false);
    }
  }, [charIndex, lineIndex]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Navbar />
      <div
        className="items-center flex flex-col justify-center min-h-screen px-4 text-center bg-gradient-to-b from-slate-200 via-blue-300 
to-blue-200 dark:bg-gradient-to-b dark:from-[#323232] dark:via-[#3f3f3f] dark:to-[#1c1c1c] text-zinc-900 dark:text-white transition-colors pt-16"
        id="main-section"
      >
        {/* Intro */}
        <section className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            <span className="text-purple-500">Master</span> Frontend Concepts
            <br className="hidden sm:block" />
            <span className="text-cyan-500 dark:text-cyan-400 text-4xl sm:text-5xl lg:text-6xl">
              Interactively
            </span>
            .
          </h1>
        </section>

        <p className="mt-4 text-xl font-medium bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 text-transparent bg-clip-text dark:bg-clip-text dark:from-purple-400 dark:via-cyan-400 dark:to-purple-400">
          <Typewriter
            options={{
              strings: ["Learn.", "Code.", "Track.", "Revise."],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 40,
              cursor: "|",
              cursorClassName:
                "text-purple-500 dark:text-purple-400 text-lg animate-blink",
              wrapperClassName: "inline-block",
              pauseFor: 2000,
            }}
          />
        </p>

        <div className="relative w-full max-w-4xl mx-auto mt-12 rounded-lg shadow-lg bg-gradient-to-r from-[#1e1e2f] to-[#26263a] px-4 py-2 border-b border-[#3e3e5c]">
          <div className="absolute flex space-x-2">
            <span className="rounded-full bg-red-500 w-3 h-3"></span>
            <span className="rounded-full bg-yellow-400 w-3 h-3"></span>
            <span className="rounded-full bg-green-500 w-3 h-3"></span>
          </div>
          <div className="text-end flex items-center justify-end font-mono text-white">
            codeNest.js
          </div>
          <div className="bg-[#1e1e2f] text-green-400 font-mono p-4 rounded-b-lg">
            <div className="p-4 text-green-400 font-mono text-left whitespace-pre">
              {allLines.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}

              {isTyping && (
                <div>
                  {displayedText}
                  <span className="animate-pulse text-purple-400">|</span>
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

        {/* ------------------------------------------------------------------------------------ */}

        {/* Features - kind of navigation part */}
        <div className="m-8 gap-8">
          <h1 className="text-start text-3xl font-bold text-slate-800 dark:text-slate-100">
            Features
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Topics */}
            <section className="bg-transparent dark:bg-[#2a2a2a]/80 dark:border dark:border-gray-700 shadow-md dark:shadow-[0_0_10px_rgba(255,255,255,0.08)] rounded-lg p-4 transition-all hover:scale-105 active:scale-95 duration-200">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                Topics
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Explore core frontend concepts like HTML, CSS, JavaScript,
                React, and more — all broken down into bite-sized,
                beginner-friendly modules.
              </p>
              <button className="cursor-pointer mt-8 text-center bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all hover:scale-105 active:scale-95 duration-200 dark:shadow-[0_0_6px_rgba(255,255,255,0.1)]">
                Learn More
              </button>
            </section>
            {/* Playground */}
            <section className="bg-transparent dark:bg-[#2a2a2a]/80 dark:border dark:border-gray-700 shadow-md dark:shadow-[0_0_10px_rgba(255,255,255,0.08)] rounded-lg p-4 transition-all hover:scale-105 active:scale-95 duration-200">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                Playground
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Practice in real-time with an in-browser code editor. Tweak,
                test, and experiment without leaving the page!
              </p>
              <button className="cursor-pointer mt-8 text-center bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all hover:scale-105 active:scale-95 duration-200 dark:shadow-[0_0_6px_rgba(255,255,255,0.1)]">
                Learn More
              </button>
            </section>
            {/* Progress */}
            <section className="bg-transparent dark:bg-[#2a2a2a]/80 dark:border dark:border-gray-700 shadow-md dark:shadow-[0_0_10px_rgba(255,255,255,0.08)] rounded-lg p-4 transition-all hover:scale-105 active:scale-95 duration-200">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                Progress
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Track your learning journey with visual indicators. Know what
                you've mastered and what's next!
              </p>
              <button className="cursor-pointer mt-8 text-center bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all hover:scale-105 active:scale-95 duration-200 dark:shadow-[0_0_6px_rgba(255,255,255,0.1)]">
                Learn More
              </button>
            </section>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default Home;
