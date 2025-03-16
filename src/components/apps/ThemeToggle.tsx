// components/ThemeToggle.tsx
"use client";
import { useTheme } from "@/hooks/useTheme";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <span
      onClick={toggleTheme}
      className="cursor-pointer opacity-[0.6] hover:opacity-100 duration-200"
    >
      {theme === "dark" ? (
        <IoSunnyOutline className="text-[20px]  text-textColor" />
      ) : (
        <IoMoonOutline className="text-[20px]  text-textColor" />
      )}
    </span>
  );
}
