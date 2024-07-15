import { useTheme } from "../themeContext/component";

export const SwitchThemeButton = () => {
  const { toggleButton } = useTheme();
  return <button onClick={toggleButton}>toggleTheme</button>;
};
