import { children } from "cheerio/lib/api/traversing";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

export const ThemeCurr = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }


    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    )
}
