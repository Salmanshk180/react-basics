import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const submitExpenseHandler = (expense) => {
    props.addExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm submit={submitExpenseHandler} />
    </div>
  );
}

export default NewExpense;
