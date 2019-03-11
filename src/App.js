import React, { Component } from 'react';
import './App.css';

//FIREBASE
//import fire from "./fire";


//COMPONENTS
import Buttons from './components/Buttons'


class App extends Component {


  render() {
    return ( 

      <div className="App">
        

        
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
         

      </div>


   
      
    );
  }
}

export default App;
