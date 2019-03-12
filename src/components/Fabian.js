import React, { Component } from 'react'

class Fabian extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMessage : false
        };
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(){
      this.setState({
        ...this.state, showMessage: !this.state.showMessage
      });
    }
  
    render() {
        return (
            <div>
                {!this.state.showMessage && (<p> Me actualizo con cada modificación </p>)}
                {this.state.showMessage && (<p>Holo, me presionaron el botón</p>)}
                <button type="button" onClick={this.handleClick} className={this.props.className}>{this.props.contenido}</button>
            </div>
        );
    }
}
  
  export default Fabian;

