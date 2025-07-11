import { useEffect, useState, type FC, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

type ThemeProviderProps = {
   children?: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
   const [theme, setTheme] = useState<Theme>('light');

   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      document.body.style.color = 'var(--text-primary)';
      document.body.style.backgroundColor = 'var(--bg-primary)';

   }, [theme]);

   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         <div data-theme={theme}>
            {children}
         </div>
      </ThemeContext.Provider>
   )
}