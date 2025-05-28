import { FC, ReactNode, useMemo, useState } from "react";
// import { Theme } from "..";
// import { ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeSBPRoveiderProps {
    children: ReactNode,
    initialTheme: Theme
}

const ThemeSBProvider: FC<ThemeSBPRoveiderProps> = ({children, initialTheme}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            { children } 
        </ThemeContext.Provider>
    )
}

export default ThemeSBProvider;