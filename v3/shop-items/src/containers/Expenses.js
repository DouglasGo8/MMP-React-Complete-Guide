import React from "react";

import "./Expenses.css";

import Card from "../components/UI/Card";

import ExpenseItem from "../components/Expenses/ExpenseItem";

/**
 *
 * @param {*} param0
 * @returns
 */
const expenses = ({ expenses }) => (
  <Card className="expenses">
    {expenses.map((exp) => {
      return (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      );
    })}
  </Card>
);

export default expenses;
