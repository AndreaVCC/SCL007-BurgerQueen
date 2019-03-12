import React, { Component } from 'react'

class Fabian extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMessage : false
        };
        this.handleClick = this.handleClick.bind(this); //ambiente
    }
  
    handleClick(){
        this.setState({
            ...this.state, showMessage: !this.state.showMessage
        });
    }
  
    render() {
        return (
            <div>

                <button type="button" onClick={this.handleClick} >Desayuno</button>

                {!this.state.showMessage && 
                (<p> Me actualizo con cada modificación  </p>)}
                
                {this.state.showMessage && 
                (<p>Selecciona elementos del pedido <button type="button" >Pan</button> <button type="button" >Queso</button>
</p> )}
            </div>
        );
    }
}
  
  export default Fabian;

