import React, { Component } from 'react';
import './App.css';

//FIREBASE
//import fire from "./fire";

//COMPONENTS
import Buttons from './components/Buttons'
import Mensaje from './components/Mensaje'
import Aleatorio from './components/Aleatorio'
import Reloj from './components/Reloj'
import Formulario from './components/Formulario'
import Fabian from './components/Fabian'




class App extends Component {
  
  constructor(){
    super();
    this.state = {
        message: "my friend (from state)!"
    };
    this.updateMessage = this.updateMessage.bind(this);
}
updateMessage() {
    this.setState({
        message: "my friend (from changed state)!"
    });
}

  render() {
    return ( 

      <div className="App">
        
          <div>
             <h1>Hello {this.state.message}!</h1>
             <button onClick={this.updateMessage}>Click me!</button>

           </div>  
        
          <nav className="navegation">
            <p className="botons">
              <Buttons contenido='DESAYUNO' className='btn btn-danger'/>
              <Buttons contenido='ALMUERZO' className='btn btn-warning'/>
            </p>
          </nav>
        
          <div className="botonespedido">
            <p><Buttons contenido='1' className='btn btn-secondary'/></p>
            <p><Buttons contenido='2' className='btn btn-secondary'/></p>
            <p><Buttons contenido='3' className='btn btn-secondary'/></p>
            <p><Buttons contenido='4' className='btn btn-secondary'/></p>
            <p><Buttons contenido='5' className='btn btn-secondary'/></p>
          </div>
               
            <p><input type='text' placeholder='Nombre Cliente' id='inputcliente'/></p>  
            <p><Buttons contenido='Enviar Cocina' className='btn btn-dark' id='' onclick='guardar()'/></p>    
         
-----------------------------------------------------------------
            <Mensaje/>
-----------------------------------------------------------------
            <Aleatorio/>
----------- -----------------------------------------------------
            <Reloj/>
-----------------------------------------------------------------
            <Formulario/>
-----------------------------------------------------------------
            <Fabian contenido='Presioname' className='btn btn-secondary'/>
      </div>
    );
  }
}

export default App;
