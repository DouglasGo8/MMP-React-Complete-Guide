import { useState, useEffect } from "react";

import Card from "./Card";
import useCounter from "../hooks/use-counter";

/**
 * @author dougdb
 * @returns
 */
const BackwardCounter = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
