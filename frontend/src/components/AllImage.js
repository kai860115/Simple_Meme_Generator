import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

class AllImage extends Component {
    render() {
        return (
            <Row style={{ flexWrap: "nowrap", overflowX: 'scroll', height: 400, marginTop: "2%" }}>
                {
                    this.props.allImage.map(img => {
                        return (
                            <Col onClick={() => this.props.handleIDChange(img.id)} key={img.url} xs={6} md={4} >
                                <Image src={img.url} thumbnail fluid />
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}

export default AllImage
