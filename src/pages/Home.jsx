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

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Navbar />
      <div className="items-center flex flex-col justify-center h-screen px-4 min-h-screen text-center bg-white text-zinc-900 dark:bg-[#0f0f1a] dark:text-white transition-colors">
        {/* Intro */}
        <section className="w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            <span className="text-purple-500">Master</span> Frontend Concepts
            <br className="hidden sm:block" />
            <span className="text-cyan-500 dark:text-cyan-400">
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
              cursorClassName: "text-purple-500 dark:text-purple-400 text-lg",
              wrapperClassName: "inline-block",
              pauseFor: 2000,
            }}
          />
        </p>

        <button className="cursor-pointer mt-8 text-center bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-all dark:shadow-[0_0_10px_#a855f7] hover:scale-105 active:scale-95 duration-200">
          Start Learning
        </button>

        {/* ------------------------------------------------------------------------------------ */}

        {/* Features */}
        <div className="m-8 gap-8">
          <h1 className="text-start text-3xl font-bold text-slate-800 dark:text-slate-100">
            Features
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Topics */}
            <div className="bg-white dark:bg-[#121212] shadow-md rounded-lg p-4 transition-all dark:shadow-[0_0_10px_#a855f7] hover:scale-105 active:scale-95 duration-200 hover:shadow-pink-400 border">
              {" "}
              {/* Placeholder shadow color, border given for now will change it later */}
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                Topics
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Explore core frontend concepts like HTML, CSS, JavaScript,
                React, and more — all broken down into bite-sized,
                beginner-friendly modules.
              </p>
              <button className="cursor-pointer mt-8 text-center bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-all dark:shadow-[0_0_10px_#a855f7] hover:scale-105 active:scale-95 duration-200">
                Learn More
              </button>
            </div>

            {/* Playground */}
            <div className="bg-white dark:bg-[#121212] shadow-md rounded-lg p-4 transition-all dark:shadow-[0_0_10px_#a855f7] hover:scale-105 active:scale-95 duration-200 border">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                Playground
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Practice in real-time with an in-browser code editor. Tweak,
                test, and experiment without leaving the page!
              </p>
              <button className="cursor-pointer mt-8 text-center bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-all dark:shadow-[0_0_10px_#a855f7] hover:scale-105 active:scale-95 duration-200">
                Learn More
              </button>
            </div>

            {/* Progress */}
            <div className="bg-white dark:bg-[#121212] shadow-md rounded-lg p-4 transition-all dark:shadow-[0_0_10px_#a855f7] hover:scale-105 active:scale-95 duration-200 border">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                Progress
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Track your learning journey with visual indicators. Know what
                you've mastered and what's next!
              </p>
              <button className="cursor-pointer mt-8 text-center bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-all dark:shadow-[0_0_10px_#a855f7] hover:scale-105 active:scale-95 duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
