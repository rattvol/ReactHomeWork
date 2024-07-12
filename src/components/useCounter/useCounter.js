import { useState, useCallback } from "react";

const min = 0;
const max = 5;

export function useCounter(initialCount) {
  const [counter, setCount] = useState(initialCount);

  const increase = useCallback(() => {
    setCount((prevState) => (prevState + 1 > max ? prevState : prevState + 1));
  }, []);

  const decrease = useCallback(() => {
    setCount((prevState) => (prevState - 1 < min ? prevState : prevState - 1));
  }, []);

  return { counter, increase, decrease };
}
