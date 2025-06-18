"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Simple toggle function
  const handleToggle = () => {
    console.log("Theme toggle clicked, current theme:", theme)
    const newTheme = theme === "dark" ? "light" : "dark"
    console.log("Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  // Show loading state until mounted
  if (!mounted || !isClient) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 text-amber-700 hover:bg-amber-100 transition-all duration-200 rounded-full"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Loading theme...</span>
      </Button>
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 text-amber-700 dark:text-cyan-400 hover:bg-amber-100 dark:hover:bg-cyan-900/20 transition-all duration-200 rounded-full border border-transparent hover:border-amber-300 dark:hover:border-cyan-400 hover:shadow-md dark:hover:shadow-cyan-400/20 cursor-pointer"
      onClick={handleToggle}
      type="button"
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="sr-only">Switch to {isDark ? "light" : "dark"} mode</span>
    </Button>
  )
}
