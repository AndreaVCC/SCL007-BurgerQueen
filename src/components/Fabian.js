import React, { Component } from 'react'
import DesdeJSON from './DesdeJSON' //desayuno json
import DesdeJSON2 from './DesdeJSON2' //almuerzo json


class Fabian extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMessage : false,
            showMessage2 : false

        };
        this.handleClick = this.handleClick.bind(this); //ambiente
        this.handleClick2 = this.handleClick2.bind(this); //ambiente

    }
  
    handleClick(){
        this.setState({
            ...this.state, showMessage: !this.state.showMessage
        });
    }

    handleClick2(){
        this.setState({
            ...this.state, showMessage2: !this.state.showMessage2
        });
    }
  
    render() {
        return (
            <div>

                <button className='btn btn-warning btn-lg mr-2' type="button" onClick={this.handleClick} >Desayuno</button>

                <button className='btn btn-warning btn-lg ml-2' type="button" onClick={this.handleClick2} >Almuerzo / Cena</button>
                

                {this.state.showMessage && (<DesdeJSON/>)}
                {this.state.showMessage2 && (<DesdeJSON2/>)}
                
            </div>
        );
    }
}
  
  export default Fabian;

