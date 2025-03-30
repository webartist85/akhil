import React, { createContext, useState, useEffect } from 'react';

//Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') { // Check if window is defined (client-side only)
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });
    useEffect(() => {
        if (typeof window !== 'undefined') { // Check if window is defined (client-side only)
            localStorage.setItem('theme', theme); // Save theme to localStorage
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}