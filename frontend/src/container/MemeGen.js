import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class MemeGen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: "",
            bottom: "",
            url: ""
        };
    }

    handleSubmit = () => {
        const params = {
            'id': this.props.id,
            'text0': this.state.top,
            'text1': this.state.bottom
        }

        fetch('https://asia-east2-wise-boulder-291919.cloudfunctions.net/function-2', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({ url: response.data.url })
            }).catch(error => {
                console.log(error)
            })
        
        this.props.handleUpdated()
        this.handleClean()
    }

    handleClean = () => {
        this.setState({
            top: "",
            bottom: ""
        })
    }

    render() {
        return (
            <Row >
                <Col >
                    <Form.Group>
                        <Form.Label>id</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="id" value={this.props.id} disabled />
                        <br />
                        <Form.Label>Top Text</Form.Label>
                        <Form.Control size="sm" onChange={(e) => this.setState({ top: e.target.value })} type="text" placeholder="Enter top text" value={this.state.top} />
                        <br />
                        <Form.Label>Bottom Text</Form.Label>
                        <Form.Control size="sm" onChange={(e) => this.setState({ bottom: e.target.value })} type="text" placeholder="Enter bottom text" value={this.state.bottom} />
                        <br />
                        <Button variant="success" onClick={this.handleSubmit}>generate</Button>{' '}
                        <Button variant="danger" onClick={this.handleClean}>clean</Button>
                    </Form.Group>
                </Col>
                <Col >
                    {this.state.url !== "" ? (<a href={this.state.url} >
                        <Image src={this.state.url} rounded fluid />
                    </a>) : (<h2>Wait for generate</h2>)}
                </Col>
            </Row>
        )
    }
}

export default MemeGen
