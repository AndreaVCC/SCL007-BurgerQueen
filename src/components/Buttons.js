import React, { Component } from 'react'



class Buttons extends Component {
 
    render() {
        return (
            <button type="button" className={this.props.className}>{this.props.contenido}</button>
        )
    }
}

export default Buttons

