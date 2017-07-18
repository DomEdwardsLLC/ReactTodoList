import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <div key={item.id}>
            <li>
              <input type="checkbox" />
              {item.text}
              <button onClick={() => this.props.remove(item.id)}>
              X
              </button>
            </li> 
          </div>
        ))}
      </ul>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.removeCompleted = this.removeCompleted.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <TodoList items={this.state.items} remove={this.removeItem}/>
        <button>Remove Completed</button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      completed: false,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  removeItem(id) {
    this.setState((prevState) => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
  }

  removeCompleted() {
    this.setState((prevState) => ({
      items: prevState.items.filter(item => !item.completed)
    }));
  }
}

export default App;
