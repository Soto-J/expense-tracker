import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpenses(expenseData);
    // Hide Form after submitting
    setShowForm(false);
    console.log(expenseData);
  };

  const showFormHandler = () => {
    // Toggle form for Add New Expense and Cancel button's
    !showForm ? setShowForm(true) : setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showForm={showFormHandler}
        />
      )}
    </div>
  );
};
