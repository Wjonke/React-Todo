
import React from 'react';

const Todo = props => {
  return (
    <div
      className={`task${props.task.completed ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.task.id)}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;


    
















//////////////old code DONT Touch it ill break app//////////////


// import React from 'react';
// import './Todo.css'


// const Todo = props => {
//   return(
//     <div onClick={() => props.handleComplete(props.data.id)}  className={props.data.completed ? 'strikeThrough' : ''}>
//     {props.data.task} 
//     </div>
//   );
// };


// export default Todo;