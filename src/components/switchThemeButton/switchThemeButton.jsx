import { useTheme } from "../themeContext/component";

export const SwitchThemeButton = () => {
  var { toggleButton } = useTheme();
  return <button onClick={toggleButton}>toggleTheme</button>;
};
