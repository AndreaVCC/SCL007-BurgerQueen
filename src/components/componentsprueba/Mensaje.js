import React, { Component } from 'react'

class Mensaje extends Component {
    constructor(props){
        super(props);
        this.state = {
            mensaje: "Estado!"
        };
        this.subiendoMensaje = this.subiendoMensaje.bind(this);
    };

    subiendoMensaje(){
        this.setState({
            mensaje: "Estado Cambiado!"
        });
    }
 
    render() {
        return (
          <div>
            <button onClick={this.subiendoMensaje}>Click me!</button>
            ¡Hola {this.state.mensaje}!
          </div> 
        )
    }
}

export default Mensaje

