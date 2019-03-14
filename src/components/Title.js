import React from 'react';
import logo from '../images/logo.png'

import {Row,Col,Jumbotron} from 'reactstrap'

export default () => {
    return(
        <div>
            <Row>
                <Col xs='12'  >
                    <Jumbotron className='bg-success text-white' >
                        <div className='text-center'>
                            <h1 className='display-5'>Burguer Queen</h1>
                            <img src={logo} alt='logo' width='100px'/>
                            <p className='lead'>Pedidos</p>
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    )
}