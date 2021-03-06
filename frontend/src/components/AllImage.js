import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

class AllImage extends Component {
    render() {
        return (
            <Row style={{ flexWrap: "nowrap", overflowX: 'scroll', height: 350, marginTop: "2%" }}>
                {
                    this.props.allImage.map(img => {
                        return (
                            <Col onClick={() => this.props.handleIDChange(img.id)} key={img.url} xs={6} >
                                <Image src={img.url} rounded fluid style={{width: 'auto', height: '90%'}}  />
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}

export default AllImage
