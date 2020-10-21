import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

class History extends Component {
    render() {
        return (
            <Container style={{ textAlign: 'center', justifyContent: 'center', marginTop: "2%", height: 600, overflowY: 'scroll' }}>
                <Row style={{ flexWrap: "wrap" }}>
                    {
                        this.props.history.map(url => {
                            return (
                                <Col key={url} xs={6} md={4} className="d-flex align-items-center justify-content-end">
                                    <a href={url} >
                                        <Image src={url} thumbnail fluid />
                                    </a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default History
