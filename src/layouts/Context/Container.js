import React, { useState } from "react"; 
import ThemeContext, { themes } from './ThemeContext'

export default function Container({ children }) {
    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{...theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}