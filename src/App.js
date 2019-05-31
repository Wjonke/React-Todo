import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'


const todoItems = [
  {
    name: 'example Task',
    id: 5654654654,
    completed: false
  },
  {
    name: 'example Task 2',
    id: 4984984984,
    completed: false
  },
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {todoItems, task: ''}
    
  }

  toggleItem = id => {
    this.setState(prevState => {
      return {
        todoItems: prevState.todoItems.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            };
          } 
          else {
            return task;
          }
        })
      };
    });
  };


  
  addItem = (e) => {
    if (this.state.task==='') {
      return;
    }
    e.preventDefault();
    const newItem = {
      name: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => {
      return {
        todoItems: [...prevState.todoItems, newItem ],  
        task: ''
      };
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState(prevState => {
      return{
        todoItems: prevState.todoItems.filter(task => !task.completed)
      };
    });
  };
  



  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To-do List</h1>
          
        </div>
        <TodoList
          todoItems={this.state.todoItems} 
          toggleItem={this.toggleItem}
        />
        <div className= 'inputField'>
          <TodoForm addItem={this.addItem} handleChanges={this.handleChanges} taskValue={this.state.task}/>
          <button onClick={this.addItem}>Add Task</button>
          <button onClick={this.clearCompleted}>Clear Complete Tasks</button>
        </div>
      </div>
    );
  };
};

export default App


































//////////////old code DONT Touch it ill break app//////////////


// //All files compile into this and are exported to Index.html to be rendered

// import React from 'react';
// import TodoList from './components/TodoComponents/TodoList'
// import TodoForm from './components/TodoComponents/TodoForm'

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todoList: [
//         {
//           task: 'Organize Garage',
//           id: 1528817077286,
//           completed: false
//         },

//         {
//           task: 'Bake Cookies',
//           id: 1528817084358,
//           completed: false
//         },
        
//         { task: "", id: Date.now(), completed: false }, 
//       ], 
//     };
//   }

//   handleTaskAddInfo = event => {
//     this.setState({ task: event.target.value });
//   };


//   handleAddTodoItem = event => {
//     event.preventDefault();
//     const todoListCopy = this.state.todoList.slice();
//     todoListCopy.push({ task: this.state.task, id: Date.now(), completed: false });
//     this.setState({ 
//       todoList: todoListCopy,
//       task: "",
//     });
     
//   };


//   handleComplete = id => {
//     const todoListCopy = this.state.todoList.slice();
//     for (let i = 0; i < this.state.todoList.length; i++) {
//       if (this.state.todoList[i].id === id) 
//       {todoListCopy[i].completed = !todoListCopy[i].completed}
//     } 
//     this.setState({ todoList: todoListCopy, task: "" });
//   }


//   clearCompleted = event => {
//     event.preventDefault();
//     const todoListCopy = this.state.todoList.slice();
//     let copiedList = todoListCopy.filter(todo => !todo.completed);
//     this.setState({ todoList: copiedList});
//   }



//   render() {
//     return (
      
//       <div className="App">
//         <h1>My Todo List</h1>
//         <p>Tasks to Complete</p>
        
//         <TodoList todoList= {this.state.todoList} handleComplete={this.handleComplete} />
//         <p> {' '} </p>
//         <TodoForm handleAddTodo={this.handleAddTodoItem} handleTask={this.handleTaskAddInfo} />
//       </div>
//     );
//   }
// }

// export default App;
