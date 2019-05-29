import React from 'react';
import './Todo.css'


const Todo = props => {
  return(
    <div onClick={() => props.handleComplete(props.data.id)}> {props.data.task} </div>
  );
};


export default Todo;