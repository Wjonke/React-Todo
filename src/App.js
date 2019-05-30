//All files compile into this and are exported to Index.html to be rendered

import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [

        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },

        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        
        { task: "", id: Date.now(), completed: false },
      ],
      //task: ""
    };
  }

  handleTaskAddInfo = event => {
    this.setState({ task: event.target.value });
  };

  handleAddTodoItem = event => {
    event.preventDefault();
    const todoListCopy = this.state.todoList.slice();
    todoListCopy.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ todoList: todoListCopy, task: "" });
  };



  render() {
    return (
      
      <div className="App">
        <h1>My Todo List</h1>
        <p>Tasks to Complete</p>
        <TodoList todoList={this.state.todoList} />
        <TodoForm handleAddTodo={this.handleAddTodoItem} handleTask={this.handleTaskAddInfo} />
      </div>
    );
  }
}

export default App;
