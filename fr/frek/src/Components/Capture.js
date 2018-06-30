import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

import './Header.css'

export default class Capture extends Component {
    render() {
        return (
            <div style={{
                marginTop: '-25%',
            }}>
                <canvas width='640' height='480'></canvas>
            </div>
        )
    }
}
