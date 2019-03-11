import React, { Component } from 'react'

class Nav extends Component {
    render() {

        const styles = {
            color: this.props.color,
            fontSize: this.props.size,
            background: this.props.background
          }

        return (
            <nav className="navbar navbar-dark bg-primary">
            <a href="#top" className="text-white">
              Nav componente
              <h3 style={styles}>{this.props.contenido}</h3>
            </a>
          </nav>
        )
    }
}

export default Nav