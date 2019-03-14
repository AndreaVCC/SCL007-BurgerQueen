import React, { Component } from 'react'
import {almuerzo} from '../json/almuerzo.json'



class DesdeJSON2 extends Component {
    constructor () {
        super();
        this.state ={
          almuerzo
        }
      }
      
    render() {
        const almuerzo = this.state.almuerzo.map((almuerzo,i) => {
            return (
                <div>
                <div className='col-md-12'>
                  <div className='btn btn-success'>
                      {almuerzo.item} $ {almuerzo.precio}
                  </div>
                </div>
                </div>

                
              )
        })

        return (
            <div>
                {almuerzo}
            </div>
        );
    }
}

export default DesdeJSON2;

