import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

/**
 *
 * @returns
 */
const newExpense = ({ onAddExpenseHandler }) => {
  const saveExpenseData = (expenseFormData) => {
    const _expenseFormData = {
      ...expenseFormData,
      id: Math.random().toString(),
    };
    onAddExpenseHandler(_expenseFormData);
    //console.log(_expenseFormData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default newExpense;
