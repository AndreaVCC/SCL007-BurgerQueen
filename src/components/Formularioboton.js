import React, { Component } from 'react'
import db from '../FirestoreConfig';



class Formularioboton extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        nombre:'',
        comida:[]
      })
    this.procesar = this.procesar.bind(this);
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioComida = this.cambioComida.bind(this);

  }

  render() {
    return (
      <div>
          
          <p>
            Nombre Cliente:
            <input type="text" value={this.state.nombre} onChange={this.cambioNombre} /> 
          </p>

          <p>
            Nombre Comida:
          </p>

            
            <input type="checkbox" name="intereses" value="Pan" onChange={this.cambioComida}/> Pan
            <input type="checkbox" name="intereses" value="Queso" onChange={this.cambioComida}/>queso
            <input type="checkbox" name="intereses" value="Carne" onChange={this.cambioComida}/>carne
          
            
            
          <p>
            <button color="info" onClick={this.procesar}>Enviar Pedido</button>
          </p>

          <h2>{this.state.nombre}</h2>
          <h3>{this.state.comida}</h3>

        
      </div>

    );
  }

 
  cambioNombre = (event) => {
    this.setState( {
      nombre: event.target.value,
    })
  }

  cambioComida = (event) => {
    this.setState( {
      comida: event.target.value
    })
  }


  procesar = (ess) => {
    ess.preventDefault();
    //console.log(this.state.nombre); 
    this.setState({
      nombre: '',
      comida: ''
    })
    db.collection('pedidos').add({
        Cliente:this.state.nombre,
        Comida:this.state.comida

    }).then( () => {
        console.log('Agregado')
    }).catch(() => {
        console.log('Error')
    })
  }

}

export default Formularioboton;

