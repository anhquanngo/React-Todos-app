import React, { PureComponent } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

import './App.css'
import './css/Todo.css'

class App extends PureComponent {
  state = {
    TodosList: [{
      id: 1,
      text: 'todo 1',
      isCompleted: true
    }, {
      id: 2,
      text: 'todo 2',
      isCompleted: false
    }],
    todoEditingId: ''
  }

  addTodo = (todo = {}) => {
    this.setState(preState => ({
      TodosList: [...preState.TodosList, todo]
    }))
  }

  getTodoEditingId = (id = "") => {
    this.setState({ todoEditingId: id })
  }

  onEditTodo = (todo = {}, index = -1) => {
    if (index >= 0) {
      const { todosList: list } = this.state
      this.state.TodosList.splice(index, 1, todo)
      this.setState({
        todosList: list,
        todoEditingId: ''
      })
    }
  }

  render() {

    const { TodosList, todoEditingId } = this.state
    return (
      <div className="todoapp" >
        <Header addTodo={this.addTodo} />
        <TodoList
          TodosList={TodosList}
          getTodoEditingId={this.getTodoEditingId}
          todoEditingId={todoEditingId}
          onEditTodo={this.onEditTodo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
