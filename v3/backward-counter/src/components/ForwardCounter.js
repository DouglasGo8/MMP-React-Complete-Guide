import Card from "./Card";

import useCounter from "../hooks/use-counter";

/**
 * @author dougdb
 * @returns
 */
const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
