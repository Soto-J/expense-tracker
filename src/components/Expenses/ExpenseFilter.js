import "./ExpenseFilter.css";

export const ExpenseFilter = (props) => {
  const dateChangeHandler = (e) => {
    props.dateSelected(e.target.value);

    // console.log(e.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
