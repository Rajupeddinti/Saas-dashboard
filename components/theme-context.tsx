// "use client"

// import { createContext, useContext, useEffect, useState } from "react"

// type ThemeContextType = {
//   darkMode: boolean
//   toggleTheme: () => void
// }

// const ThemeContext = createContext<ThemeContextType | null>(null)

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
//     const stored = localStorage.getItem("theme")
//     if (stored === "dark") {
//       document.documentElement.classList.add("dark")
//       setDarkMode(true)
//     }
//   }, [])

//   const toggleTheme = () => {
//     setDarkMode((prev) => {
//       const next = !prev
//       document.documentElement.classList.toggle("dark", next)
//       localStorage.setItem("theme", next ? "dark" : "light")
//       return next
//     })
//   }

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export function useTheme() {
//   const ctx = useContext(ThemeContext)
//   if (!ctx) {
//     throw new Error("useTheme must be used inside ThemeProvider")
//   }
//   return ctx
// }
