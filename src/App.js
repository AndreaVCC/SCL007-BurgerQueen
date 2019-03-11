import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json';

import Nav from './components/Nav'
import Buttons from './components/Buttons'
import Input from './components/Buttons'



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



        <Nav size='10px' color='#ff0000' contenido='uno' />
        <Nav size='20px' color='#00ff00' contenido='dos' background= '#C6FFDD'/>
        <Nav size='30px' color='#0000ff' contenido='tres' />

        <Nav/>
      
        
      
        <nav className="navbar navbar-dark bg-dark">
          <a href="#top" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        

        <Buttons contenido='Boton 1' class='btn btn-secondary'/>
        <Buttons contenido='Boton 2' class='btn btn-danger'/>
        <Buttons contenido='Boton 3' class='btn btn-warning'/>
        <Buttons contenido='Boton 4' class='btn btn-dark'/>


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

