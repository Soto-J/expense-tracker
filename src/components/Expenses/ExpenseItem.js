import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import { ReactComponent as Svg } from "../../imgs/SVG/x-square.svg";
import "./ExpenseItem.css";

export const ExpenseItem = ({ date, title, amount, removeItemHandler }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          <button
            className="expense-item__x-button"
            onClick={removeItemHandler}
          >
            <Svg />
          </button>
        </div>
      </Card>
    </li>
  );
};
