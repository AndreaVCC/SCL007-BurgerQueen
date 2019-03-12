import React, { Component } from 'react'

class Aleatorioenarreglo extends Component {
  constructor(props) {
    super(props)
    this.generarAleatorios = this.generarAleatorios.bind(this);
    this.state = {
      numeros: []
    }
  }
  render() {
    return (
      <div>
        {this.state.numeros.map((num) => { 
          return (<p>{num}</p>) } )}
        <button onClick={this.generarAleatorios}>Generar</button>
        <p>5 Números aleatorios:</p>
      </div>
    );
  }
   
  generarAleatorios() {
    const vec=new Array(5)
    for(let x=0; x<vec.length; x++)
      vec[x]=Math.trunc(Math.random()*10);
    this.setState( {
      numeros: vec
    })
  }
}

export default Aleatorioenarreglo;

