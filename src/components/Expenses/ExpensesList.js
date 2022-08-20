import "./ExpensesList.css";
import { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = (props) => {
  const [list, setList] = useState(props.filteredExpenses)
  let expenseContent = <p>No Expenses Found.</p>;

  const removeItemHandler = (index) => {
    console.log(list);
    setList(props.filteredExpenses.splice(index, 1))
  };

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">{expenseContent}</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item, index) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            removeItemHandler={() => removeItemHandler(index)}
          />
        );
      })}
    </ul>
  );
};
