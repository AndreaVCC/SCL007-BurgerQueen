import React, { Component } from 'react'
import db from '../../FirestoreConfig';



class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        nombre:'',
      })
    this.procesar = this.procesar.bind(this);
    this.cambioNombre = this.cambioNombre.bind(this);
  }

  render() {
    return (
      <div>
        
          <input type="text" value={this.state.nombre} onChange={this.cambioNombre} />
          <button color="info" onClick={this.procesar}>Agregar</button>
          <h2>{this.state.nombre}</h2>
        
      </div>
    );
  }

 
  cambioNombre = (event) => {
    this.setState( {
      nombre: event.target.value
    })
  }

  procesar = (ess) => {
    ess.preventDefault();
    //console.log(this.state.nombre); 
    this.setState({
      nombre: ''
    })
    db.collection('pedidos').add({
        Cliente:this.state.nombre
    }).then( () => {
        console.log('Agregado')
    }).catch(() => {
        console.log('Error')
    })
  }

}

export default Formulario;

