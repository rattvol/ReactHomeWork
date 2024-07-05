import { useState, useCallback } from "react";

export function useCounter(initialCount) {
  const [counter, setCount] = useState(initialCount);

  const min = 0;
  const max = 5;

  const increase = useCallback(() => {
    setCount((prevState) => (prevState + 1 > max ? prevState : prevState + 1));
  }, []);

  const decrease = useCallback(() => {
    setCount((prevState) => (prevState - 1 < min ? prevState : prevState - 1));
  }, []);

  return { counter, increase, decrease };
}
