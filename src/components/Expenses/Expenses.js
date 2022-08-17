import "./Expenses.css";
import { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpenseChart } from "./ExpenseChart";

export const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setfilteredYear(year);
    console.log(props.expenses);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    const expenseYear = expense.date.getFullYear().toString();
    return expenseYear === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        dateSelected={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};
