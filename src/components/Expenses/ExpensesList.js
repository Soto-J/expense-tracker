import "./ExpensesList.css";
import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = (props) => {
  let expenseContent = <p>No Expenses Found.</p>;

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">{expenseContent}</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};
