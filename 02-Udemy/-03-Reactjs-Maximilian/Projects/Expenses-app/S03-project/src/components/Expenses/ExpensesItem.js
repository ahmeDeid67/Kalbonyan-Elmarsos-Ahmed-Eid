import "./ExpensesItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpensesItem(props) {
  // const expenseDate = new Date(2022, 5, 27);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = 294.67;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;
