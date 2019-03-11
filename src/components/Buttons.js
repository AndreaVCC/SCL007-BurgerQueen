import React, { Component } from 'react'

class Buttons extends Component {
    render() {

              return (
          <button type="button" class={this.props.class}>{this.props.contenido}</button>

        )
    }
}

export default Buttons

