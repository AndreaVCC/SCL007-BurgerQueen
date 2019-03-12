import React, { Component } from 'react'



class Buttons extends Component {
    constructor(props){
        super(props);
       
       this.state = {term: ''}
        }
 
    render() {
        return (
            <button type="button" className={this.props.className}>{this.props.contenido}</button>
        )
    }
}

export default Buttons

