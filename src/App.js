import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

import './App.css'
import './css/Todo.css'

function App() {
  return (
    <div className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
