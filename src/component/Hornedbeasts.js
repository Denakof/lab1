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
    render() {


        return (

            // <div>
            //     <h2> {this.props.title}</h2>
            //     <p>{this.props.par} </p>
            //     <h4 >{this.props.num}</h4>
            //     <img style={{
            //         width: "18rem", height: "18rem"
            //     }} src={this.props.Imgurl} alt={this.props.title} />


            // </div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.Imgurl} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.par}    </Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>{this.state.likes} 💜
                    </Card.Text>
                    <Button onClick={this.voting} variant="outline-warning">Like</Button>
                </Card.Body>
            </Card>
        );
    }

}


export default Hornedbeasts;