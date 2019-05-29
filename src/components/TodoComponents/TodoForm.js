//this is where the form will be build out. It will export to TodoList.js


import React from 'react';

const TodoForm = props => {

  return (

    <form>
      <input placeholder='Add a Task' onChange={props.handleTask} />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleclearCompleted}>Clear Completed</button>
    </form>

  );
};

export default TodoForm