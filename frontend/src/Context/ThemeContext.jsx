import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")

    if (saved) {
      setIsDark(saved === "dark")
    } else if (window.matchMedia) {
      setIsDark(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme: () => setIsDark(v => !v),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider")
  }
  return ctx
}
