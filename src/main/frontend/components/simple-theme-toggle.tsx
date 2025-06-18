"use client"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SimpleThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check initial theme
    const savedTheme = localStorage.getItem("blue-book-theme")
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialDark = savedTheme === "dark" || (!savedTheme && systemDark)

    setIsDark(initialDark)
    document.documentElement.classList.toggle("dark", initialDark)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    // Update localStorage
    localStorage.setItem("blue-book-theme", newIsDark ? "dark" : "light")

    // Update document class
    document.documentElement.classList.toggle("dark", newIsDark)

    console.log("Theme toggled to:", newIsDark ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 text-amber-700 hover:bg-amber-100 transition-all duration-200 rounded-full"
        disabled
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 text-amber-700 dark:text-cyan-400 hover:bg-amber-100 dark:hover:bg-cyan-900/20 transition-all duration-200 rounded-full border border-transparent hover:border-amber-300 dark:hover:border-cyan-400 hover:shadow-md dark:hover:shadow-cyan-400/20"
      onClick={toggleTheme}
      type="button"
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="sr-only">Toggle theme - Current: {isDark ? "dark" : "light"}</span>
    </Button>
  )
}
