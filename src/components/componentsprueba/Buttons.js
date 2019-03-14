import React, { Component } from 'react'



class Buttons extends Component {
    constructor(props){
        super(props);
        this.state = {comida:''}
        }
 

    render() {
        return (
            <button 
                value={this.props.valor} 
                type="button" 
                className={this.props.className}
                >{this.props.contenido}
                </button>
        )
    }
}

export default Buttons

