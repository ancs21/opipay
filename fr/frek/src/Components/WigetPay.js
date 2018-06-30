import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './Header.css'

export default class WigetPay extends Component {
    render() {
        return (
            <div style={{
                marginTop: '-25%',
            }}>
                <Card style={{
                    width: '60%',
                    backgroundColor: '#3c4656',
                    textAlign: 'center',
                    color: '#fff',
                    boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)'
                }}>
                    <CardImg top style={{
                        height: 150,
                        width: 150,
                        borderRadius: '50%',
                        margin: '20px auto'
                    }} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{ fontWeight: '400',  }}>Name: Ngoc Trinh</CardTitle>
                        <CardTitle style={{ fontWeight: '400', marginBottom: 30 }}>Phone Number: 102356664</CardTitle>
                        <Button style={{ borderRadius: 999, padding: '20px 50px', boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)', fontSize: 22, fontWeight: '500', backgroundColor: '#6C8DF4' }}>Paynow</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
