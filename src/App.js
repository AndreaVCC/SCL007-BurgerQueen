import React, { Component } from 'react';
import './App.css';

//FIREBASE
//import fire from "./fire";

//COMPONENTS
//import Buttons from './components/Buttons'
//import Formulario from './components/Formulario'
import Fabian from './components/Fabian'
import Title from './components/Title'
import Mostrardatosdefirebase from './components/Mostrardatosdefirebase'
//import Enviarafirebase from './components/Enviarafirebase';
import Formularioboton from './components/Formularioboton'



class App extends Component {
  
  render() {
    return ( 

      <div className="App">       

            <Title/>
       
        <div className="container">

          <div className="botones-comida">
            
            <Fabian/>
          </div>
 
            <Formularioboton/>

            <Mostrardatosdefirebase/>

            

        </div>        

    </div>
    );
  }
}
export default App;


//          <Fabian contenido='Presioname' className='btn btn-secondary'/>
