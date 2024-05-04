import React from "react";

function Todo(props) {
  return (
    <div className="todo_item">
      <img src={props.img} className="todo_item__image"/>
      <div className="todo_item__text">{props.title}</div>
    </div>
  )
}

export default Todo
