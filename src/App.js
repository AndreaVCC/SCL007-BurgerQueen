import React, { Component } from 'react';
import './App.css';

//COMPONENTS
import Buttons from './components/Buttons'



class App extends Component {


  render() {
    return ( 
      <div className="App">

        
        <p><Buttons contenido='DESAYUNO' className='btn btn-danger'/>
        <Buttons contenido='ALMUERZO' className='btn btn-warning'/></p>
       
        <p><Buttons contenido='1' className='btn btn-secondary'/></p>
        <p><Buttons contenido='2' className='btn btn-secondary'/></p>
        <p><Buttons contenido='3' className='btn btn-secondary'/></p>
        <p><Buttons contenido='4' className='btn btn-secondary'/></p>
        <p><Buttons contenido='5' className='btn btn-secondary'/></p>

        <p><input type="text" placeholder="Nombre Cliente"/></p>

        <Buttons contenido='ENVIAR COCINA' className='btn btn-dark'/>

       


      </div>
   
      
    );
  }
}

export default App;

