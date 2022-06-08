// import React, { useState } from "react";
import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //   const [newTitle, setNewTitle] = useState("");
  //   const changeHandler = (event) => {
  //     setNewTitle(event.target.value);
  //   };

  //   const [title, setTitle] = useState(props.title);
  //   const clickHandler = () => {
  //     setTitle(newTitle);
  //   };

  return (
    <Card className="Expense-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="Expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="Expense-item__price">${props.amount}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
