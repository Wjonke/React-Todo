import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
  console.log(props);
  return (
    <div className="todo-list">
      {props.todoItems.map(task => {
        return (
          <Todo
            key={task.id}
            toggleItem={props.toggleItem}
            task={task}
          />
        );
      })}
    </div>
  );
};

export default TodoList;



































//////////////old code DONT Touch it ill break app//////////////


// import React from "react";
// import Todo from "./Todo";

// const TodoList = props => {

//   return (
     
//     <div>
//     {props.todoList.map(todo =>  <Todo key={todo.id} data={todo} handleComplete={props.handleComplete}/>)}
//     </div>
//   );
// };



// export default TodoList;