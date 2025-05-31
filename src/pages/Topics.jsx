import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ThemeProvider } from "../context/theme";

function Topics() {
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
  
  const topics = [
    {
      name: "HTML",
      desc: "Structure your web pages with HTML",
      link: "/topics/html",
    },
    {
      name: "CSS",
      desc: "Structure your web pages with HTML",
      link: "/topics/css",
    },
    {
      name: "JavaScript",
      desc: "Put functinality in your web pages with JavaScript",
      link: "/topics/javascript",
    },
  ];
  return (
    <>
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Navbar />
      <div className="items-center flex flex-row gap-8 h-screen justify-center bg-white dark:bg-[#121212] p-4">
        {topics.map((topic) => (
          <div className="group relative h-96 w-72 [perspective:1000px]">
            <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] dark:from-[#2b5876] dark:to-[#4e4376] p-6 text-white [backface-visibility:hidden]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start">
                    <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                      {topic.name}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-sm opacity-75 text-gray-800 dark:text-gray-100">
                      Hover to flip!
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] dark:from-[#614385] dark:to-[#516395]   p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="text-lg text-gray-800 dark:text-gray-100">
                      {topic.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <a
                      className="px-4 py-2 cursor-pointer bg-white text-purple-600 dark:bg-gray-100 dark:text-purple-700 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                      href={topic.link}
                    >
                      Learn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default Topics;
