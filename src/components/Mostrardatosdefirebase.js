import React, { Component } from 'react';
import db from '../FirestoreConfig';


class Mostrardatosdefirebase extends Component {

    state = {
        cliente:[], //este items se va a rellenar con la respuesta de componentDidmount
    }

    componentDidMount(){
        //obtenemos de la coleccion 'todos' todos los snapshot
        db.collection('pedidos').onSnapshot((snapShots) =>{
            this.setState({
                cliente: snapShots.docs.map( doc =>{ //con map recorro todos los documentos
                    return console.log(doc.data()) ; 
                    //return console.log(doc.id()) ; 

                })
            })
        })
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Mostrardatosdefirebase;