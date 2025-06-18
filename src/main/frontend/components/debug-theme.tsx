"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function DebugTheme() {
  const { theme, resolvedTheme, mounted } = useTheme()
  const [documentClass, setDocumentClass] = useState("")

  useEffect(() => {
    if (mounted) {
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
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50">
      <div>Theme: {theme}</div>
      <div>Resolved: {resolvedTheme}</div>
      <div>Classes: {documentClass}</div>
      <div>Storage: {typeof window !== "undefined" ? localStorage.getItem("blue-book-theme") : "N/A"}</div>
    </div>
  )
}
