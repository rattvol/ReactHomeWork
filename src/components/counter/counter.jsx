import { useCounter } from "../useCounter/useCounter";
import { useUser } from "../userContext/component";

export const Counter = () => {
  const { counter, increase, decrease } = useCounter(0);
  const { value } = useUser();
  if (!value) return;

  return (
    <div>
      <button onClick={increase}>+</button>
      {counter}
      <button onClick={decrease}>-</button>
    </div>
  );
};
