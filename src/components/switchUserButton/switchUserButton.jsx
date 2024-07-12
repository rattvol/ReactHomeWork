import { useUser } from "../userContext/component";

function getText(userName) {
  return userName ? "User: " + userName : "";
}

function getButtonValue(userName) {
  return userName ? "Выйти" : "Войти";
}

export const SwitchUserButton = () => {
  var { value, toggleButton } = useUser();
  var text = getText(value);
  var buttonValue = getButtonValue(value);
  return (
    <div>
      <button onClick={toggleButton}>{buttonValue}</button> {text}
    </div>
  );
};
