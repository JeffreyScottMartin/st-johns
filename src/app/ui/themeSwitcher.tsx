"use client";
import { changeTheme } from "@/utils/helper";
import { useEffect } from "react";
import { FaSun, FaMoon, FaLowVision } from "react-icons/fa";

const ThemeSwitcher = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      changeTheme(savedTheme);
    } else {
      changeTheme("");
    }
  }, []);
  return (
    <div className="fixed top-0 right-0 p-4 bg-transparent">
      <button
        className="py-2 px-4 m-2 text-typography text-xl"
        onClick={() => changeTheme("")}
      >
        <FaMoon />
      </button>
      <button
        className="py-2 px-4 m-2 text-typography text-xl"
        onClick={() => changeTheme("lightTheme")}
      >
        <FaSun />
      </button>
      <button
        className="py-2 px-4 m-2 text-typography text-xl"
        onClick={() => changeTheme("accessibleTheme")}
      >
        <FaLowVision />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
