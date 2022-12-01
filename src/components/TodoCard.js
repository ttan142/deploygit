import React from "react";
import { Link } from "react-router-dom";

const TodoCard = (props) => {
  const getStyle = () => {
    return {
      textDecoration:
        props.todo.completed.toString() == "true" ? "line-through" : "none",
      color: props.todo.completed.toString() == "true" ? "green" : "red",
    };
  };

  const { id, title, completed } = props.todo;
  return (
    <div className="item">
      <div style={getStyle()} className="header">
        {title}
        <span>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginLeft: "10px" }}
          onClick={() => props.clickHander(id)}
        ></i>
        <Link to={{ pathname: `/edit`, state: { todo: props.todo } }}>
          <i
            className="edit alternate outline icon"
            style={{ color: "blue" }}
          ></i>
        </Link>
        </span>
      </div>
    </div>
  );
};

export default TodoCard;
