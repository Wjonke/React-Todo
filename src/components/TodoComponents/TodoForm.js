import React from 'react';

const TodoForm = (props) =>{
 
    return (
      <form  onSubmit={props.addItem}>
        <input
          value={props.taskValue}
          name="task"
          onChange={props.handleChanges}
          placeholder="Add Task" required

        />
      </form>
    );
  }


export default TodoForm;
























//////////////old code DONT Touch it ill break app//////////////
// import React from 'react';

// const TodoForm = props => {

//   return (

//     <form>
//       <input placeholder='Add a Task' onChange={props.handleTask} />
//       <button onClick={props.handleAddTodo}>Add Todo</button>
//       <button onClick={props.handleclearCompleted}>Clear Completed</button>
//     </form>

//   );
// };

// export default TodoForm