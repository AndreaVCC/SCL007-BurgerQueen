import React, { Component } from 'react'
import {desayuno} from '../json/desayuno.json'



class DesdeJSON extends Component {
    constructor () {
        super();
        this.state ={
          desayuno,
          key:''
        }
      }
      
    render() {
        const desayuno = this.state.desayuno.map((desayuno,i) => {
            return (
                <div>
                  <div className='col-md-12'>
                    <button className='btn btn-success mr-2' type="button" onClick={this.nombrefuncionn} >{desayuno.item} $ {desayuno.precio}</button> 
                      
                  </div>
                </div>
                

                
              )
        })

        return (
            <div>
                {desayuno}
            </div>
        );
    }
}

export default DesdeJSON;

