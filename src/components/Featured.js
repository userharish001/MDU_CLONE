"use client"; 

import { useState, useEffect } from "react";
import { Moon, Sun, Plus, Minus, RefreshCcw } from "lucide-react";

const Featured = () => {
  const [fontSize, setFontSize] = useState(16); // Default font size (16px)
  const [darkMode, setDarkMode] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const storedFontSize = localStorage.getItem("fontSize");
    const storedDarkMode = localStorage.getItem("darkMode");

    if (storedFontSize) setFontSize(parseInt(storedFontSize));
    if (storedDarkMode === "true") setDarkMode(true);
  }, []);

  // Apply font size to the entire document
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  // Apply dark mode to the document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="flex flex-row justify-end px-5 py-3">
      {/* Font Size Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setFontSize(fontSize + 2)}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Plus size={20} />
        </button>
        <button
          onClick={() => setFontSize(fontSize > 10 ? fontSize - 2 : 10)}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          <Minus size={20} />
        </button>
        <button
          onClick={() => setFontSize(16)}
          className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          <RefreshCcw size={20} />
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 ml-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default Featured;
