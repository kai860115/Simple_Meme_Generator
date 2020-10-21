import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import MemeGen from './MemeGen'
import History from '../components/History'
import AllImage from '../components/AllImage'

class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: 1,
      id: "181913649",
      history: [],
      allImage: [],
      updated: false
    };
  }

  get_history = () => {
    if (this.state.updated === false) {
      fetch('https://asia-east2-wise-boulder-291919.cloudfunctions.net/function-1', {
        method: "GET"
      }).then(response => response.json())
        .then(response => {
          this.setState({ history: response.history, updated: true })
        }).catch(error => {
          console.log(error)
        })
    }
    this.setState({ now: 2 })
  }

  componentDidMount() {
    fetch('https://asia-east2-wise-boulder-291919.cloudfunctions.net/function-3', {
      method: "GET"
    }).then(response => response.json())
      .then(response => {
        this.setState({ allImage: response.memes })
      }).catch(error => {
        console.log(error)
      })
  }

  handleIDChange = (id) => {
    this.setState({
      id: id
    })
  }

  render() {
    return (
      <div>
        <Container style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', marginTop: "2%" }}>
          <ButtonGroup className="mb-2">
            <Button onClick={() => { this.setState({ now: 1 }) }}>Generator</Button>
            <Button onClick={() => { this.get_history() }}>History</Button>
          </ButtonGroup>
        </Container>
        {this.state.now === 1 ? (
          <Container style={{ textAlign: 'center', justifyContent: 'center', marginTop: "2%", position: 'fix' }}>
            <MemeGen id={this.state.id} handleUpdated={()=>{this.setState({updated: false})}} />
            <AllImage allImage={this.state.allImage} handleIDChange={this.handleIDChange} />
          </Container>
        ) : (<History history={this.state.history} />)}
      </div>
    );
  }
}

export default Meme;