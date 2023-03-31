import {ThemeContext} from "../context";
import {useContext} from "react";

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}