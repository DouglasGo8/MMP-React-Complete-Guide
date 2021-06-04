import React from "react";

import "./App.css";

import Expenses from "./containers/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
/**
 *
 * @returns
 */
const app = () => {
  const expenses = [
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

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default app;
