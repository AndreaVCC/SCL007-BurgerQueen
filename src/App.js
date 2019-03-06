import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
    todos // es lo mismo que colocar todos: 'todos'
    }
  }

  render() {
    //console.log(this.state.todos)
    const todos= this.state.todos.map((todo, i) => { // se recorre el .json
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            </div>
          </div>
        </div>
      )
    })

    return ( //Nav y contador
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="#top" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
      
      <div className="container">
        <div className="row nt-4">
          { todos }
        </div>
      </div>
      
      
      </div>
    );
  }
}

export default App;
