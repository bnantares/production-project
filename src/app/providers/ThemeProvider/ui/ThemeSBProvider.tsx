import { FC, ReactNode, useMemo, useState } from "react";
import { Theme } from "..";
import { ThemeContext } from "../lib/ThemeContext";

interface ThemeSBPRoveiderProps {
    children: ReactNode,
    initialTheme: Theme
}

const ThemeSBProvider: FC<ThemeSBPRoveiderProps> = ({children, initialTheme}) => {
    const [theme, setTheme] = useState(initialTheme);

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