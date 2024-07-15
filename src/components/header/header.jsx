import { ProgressBar } from "../progressBar/progressBar";
import { SwitchUserButton } from "../switchUserButton/switchUserButton";

export const Header = () => {
  return (
    <>
      <header>
        <SwitchUserButton />
        <ProgressBar />
        <h1>
          <center>Restaurants</center>
        </h1>
      </header>
    </>
  );
};
