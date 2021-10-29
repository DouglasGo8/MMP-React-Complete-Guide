import { useState, useEffect } from "react";

/**
 * @author dougdb
 */
const useCounter = (isForward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (isForward ? prev + 1 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isForward]);

  return counter; // can return Objects, Arrays etc...
};

export default useCounter;
