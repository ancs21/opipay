import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Capture from './Capture'
import WigetPay from './WigetPay'
import WigetSuccess from './WigetSuccess'
import './Header.css'

import logo from '../images/logo.png'

export default class Header extends Component {
    render() {
        return (
            <Container fluid className="background">
                <Row className="con">
                    <Col xs="6">
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col xs="6">
                        {/* <Form style={{display: 'flex', marginTop: 10}}>
                            <Input style={{borderRadius: 999, padding: 20, fontSize: 20}} type="number" name="number" id="number" placeholder="enter amount here" />
                            <Button style={{borderRadius: 999, boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)',  padding: '20px 50px', marginLeft: 30, fontSize: 20, backgroundColor: '#6C8DF4'}}>Pay with Opipay</Button>
                        </Form> */}
                        {/* <Capture /> */}
                        <WigetPay />
                        {/* <WigetSuccess /> */}
                    </Col>
                </Row>
                
            </Container>
        )
    }
}
