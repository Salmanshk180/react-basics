import React, { useState } from "react";
import "./ExpenseForm.css";
function Expenseform(props) {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleHandler = (event) => {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountHandler = (event) => {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateHandler = (event) => {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        enteredDate: event.target.value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
        id: Math.random().toString(),
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    props.submit(data);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default Expenseform;
