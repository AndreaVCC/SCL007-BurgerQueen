import React, { Component } from 'react'


class Reloj extends Component {
    constructor(props) {
      super(props);
      this.state = ({
        hora: new Date()
      })
    }
  
    render() {
      return (
        <div>{this.state.hora.toLocaleTimeString()}</div>
      );
    }
  
    //componentDidMount() =>  creamos un temporizador para que se ejecute una
    // función anónima que le pasamos en el primer parámetro cada 1000 milisegundo:
    componentDidMount() {
      this.id = setInterval(()=>this.cambioSegundo(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.id);
    }
  
    cambioSegundo() {
      this.setState ({
        hora: new Date()
      })    
    }
  
  }
  
  export default Reloj;

