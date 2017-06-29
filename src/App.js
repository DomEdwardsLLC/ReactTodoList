import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: Array(3).fill('Randy you got this'),
    };
  }
  render() {
    return (
      <div>
        <input/>
        <ul>
          {
            this.state.todos.map((todo) =>
              <li>
                <div>
                  <label>
                    {todo}
                  </label>
                </div>
              </li> 
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList className="todo" />
      </div>
    );
  }
}

export default App;
