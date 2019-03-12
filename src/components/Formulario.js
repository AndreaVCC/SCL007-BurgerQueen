import React, { Component } from 'react'

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
        <form onSubmit={this.procesar}>
          <p>Ingrese Nombre:<input type="text" value={this.state.nombre} onChange={this.cambioNombre} /></p>
          <p><input type="submit" /></p>
        </form>
      </div>
    );
  }

  procesar(e) {
    e.preventDefault();
    console.log('Cliente: '+this.state.nombre);
  }

  cambioNombre(e) {
    this.setState( {
      nombre: e.target.value
    })
  }

}

export default Formulario;

