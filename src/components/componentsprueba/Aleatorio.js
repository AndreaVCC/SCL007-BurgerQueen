import React, { Component } from 'react'

class Aleatorio extends Component {
    constructor(props) {
      super(props)
      this.generarAleatorio = this.generarAleatorio.bind(this);

      //Aqui se define el valor del atributo state
      this.state = { 
        numero: 0
      }
    }
    render() {
      return (
        <div>
          <button onClick={this.generarAleatorio}>Generar</button> 
          Número aleatorio: {this.state.numero}

        </div>
      );
    }
     
    generarAleatorio() {
      const numAzar =Math.trunc(Math.random()*10);
      this.setState( {
        numero: numAzar
      })
    }
  }
  
  export default Aleatorio;

