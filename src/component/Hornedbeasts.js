import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';
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
        this.props.selectfun(this.props.title,this.props.par,this.props.num,this.props.Imgurl)
    }
    render() {


        return (

<>
            <Card  onClick={this.Selecting} style={{ width: '18rem', display: 'inline-block' }}>
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
            {/* <SelectedBeast show={this.state.show} handleClose={this.props.handleClose} title={this.props.title} par={this.props.par} Imgurl={this.props.imgUrl} /> */}
            </>
        );
    }

}

export default Hornedbeasts;
