// your components will all go in this `component` directory.

import React from "react";
import Todo from "./Todo";

const TodoList = props => {

  return (
     
    <div>
    {props.todoList.map(props =>  <Todo id={props.id} data={props} handleComplete={props.handleComplete}/>)}

    </div>
  );
};

export default TodoList;