import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import successIcon from '../images/sucess.png'

import './Header.css'

export default class WigetSuccess extends Component {
    render() {
        return (
            <div style={{
                marginTop: '-25%',
            }}>
                <Card style={{
                    width: '60%',
                    backgroundColor: '#ffffff',
                    textAlign: 'center',
                    color: '#444444',
                    boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)'
                }}>
                    <CardImg top style={{
                        height: 150,
                        width: 150,
                        borderRadius: '50%',
                        margin: '20px auto'
                    }} src={successIcon} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{ fontWeight: '400',fontSize: 22, fontWeight: '500'  }}>Payment Success</CardTitle>
                        <CardTitle style={{ fontWeight: '400', marginBottom: 30 }}>TransactionId: #1224345</CardTitle>
                        {/* <Button style={{ borderRadius: 999, padding: '20px 50px', boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)', fontSize: 22, fontWeight: '500', backgroundColor: '#6C8DF4' }}>Paynow</Button> */}
                    </CardBody>
                </Card>
            </div>
        )
    }
}
