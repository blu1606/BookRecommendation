"use client"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeTest() {
  const { theme, setTheme, mounted } = useTheme()
  const [documentClass, setDocumentClass] = useState("")

  useEffect(() => {
    const updateClass = () => {
      setDocumentClass(document.documentElement.className)
    }

    updateClass()

    const observer = new MutationObserver(updateClass)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded-lg shadow-lg z-50">
      <h3 className="font-bold mb-2">Theme Debug</h3>
      <p>Current theme: {theme}</p>
      <p>Document classes: {documentClass}</p>
      <div className="flex gap-2 mt-2">
        <Button size="sm" onClick={() => setTheme("light")}>
          Light
        </Button>
        <Button size="sm" onClick={() => setTheme("dark")}>
          Dark
        </Button>
      </div>
    </div>
  )
}
