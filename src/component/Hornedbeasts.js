import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
class Hornedbeasts extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        }
    }


    voting = () => {
        this.setState({
            likes: this.state.likes + 1
        })

    }

    Selecting = () => {
        this.props.selectfun(<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.Imgurl} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    {this.props.par}    </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>{this.state.likes} 💜
                </Card.Text>
                <Button onClick={this.voting} variant="outline-warning">Like</Button>
            </Card.Body>
        </Card>)
    }
    render() {


        return (


            <Card onClick={this.Selecting} style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src={this.props.Imgurl} />
                <Card.Body>
                    <Card.Title >{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.par}    </Card.Text>
                    <Card.Text style={{ textAlign: 'center' }}>{this.state.likes} 💜
                    </Card.Text>
                    <Button onClick={this.voting} variant="outline-warning">Like</Button>
                </Card.Body>
            </Card>
        );
    }

}

export default Hornedbeasts;