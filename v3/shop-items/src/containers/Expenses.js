import "./Expenses.css";

import Card from "../components/UI/Card";
import ExpenseFilter from "../components/Expenses/ExpensesFilter";

import ExpenseItem from "../components/Expenses/ExpenseItem";
import { useState } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const expenses = ({ expenses }) => {
  const [year, setYear] = useState("2021");

  const filterChangedHandler = (selectedYear) => {
    // console.log(selectedYear);
    setYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((e) => {
    return e.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onFilterChangeHandler={filterChangedHandler}
        />
        {filteredExpenses.map((exp) => {
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
    </div>
  );
};

export default expenses;
