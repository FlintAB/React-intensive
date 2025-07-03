import { useState, type FC, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

type ThemeProviderProps = {
   children?: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
   const [theme, setTheme] = useState<Theme>('light');
   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

   const color = theme === 'light' ? '#333' : '#FFF';
   const backgroundColor = theme === 'light' ? '#FFF' : '#333';
   
   document.body.style.color = color;
   document.body.style.backgroundColor = backgroundColor;

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         <div data-theme={theme}>
            {children}
         </div>
      </ThemeContext.Provider>
   )
}