import React, { useState } from "react";

import "./App.css";

import Expenses from "./containers/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const EXPENSES_DATA_MOCK = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 92.13,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "TV Room",
    amount: 492.13,
    date: new Date(2020, 8, 9),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 292.87,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 552.12,
    date: new Date(2021, 4, 25),
  },
];
/**
 *
 * @returns
 */
const app = () => {
  const [expenses, setExpenses] = useState(EXPENSES_DATA_MOCK);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default app;
