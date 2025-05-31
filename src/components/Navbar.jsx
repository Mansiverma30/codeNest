import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full fixed top-0 z-50 px-6 py-4 backdrop-blur bg-black/60 dark:bg-white/10 border-b border-white/10 flex justify-between items-center font-mono text-white dark:text-zinc-200 shadow-md">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tight"
      >
        <span className="text-purple-400">Code</span>
        <span className="text-cyan-400">Nest_</span>
      </motion.div>

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 0.8 }}
        className="p-2 rounded-full hover:bg-white/10 transition"
        aria-label="Toggle Theme"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-300" />
        ) : (
          <Moon className="h-5 w-5 text-blue-400" />
        )}
      </motion.button>
    </nav>
  );
}
