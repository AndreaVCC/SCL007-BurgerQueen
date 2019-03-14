import React, { Component } from 'react';
import db from '../../FirestoreConfig';

class Enviarafirebase extends Component {
    constructor(props) {
        super(props);   
        this.state = {inputValue: ''}
    }

    render() {

        const {inputValue} = this.state

        return (
            <div>
              <input placeholder='Cliente' onChange={this.changeValue} value={inputValue}/> 
              <button color="info" onClick={this.action}>Agregar</button>
              <h2>{this.state.inputValue}</h2>
            </div>
        );
    }
    
    changeValue= (e) => {
        this.setState({
            inputValue:e.target.value
        })
    }

    action = () =>{
        const {inputValue} = this.state
        db.collection('pedidos').add({
            Cliente:inputValue
        }).then( () => {
            console.log('Agregado')
        }).catch(() => {
            console.log('Error')
        })
    }
}

export default Enviarafirebase;