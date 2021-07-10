import React from "react";
import Hornedbeasts from "./Hornedbeasts";
import beasts from "./Data.json";
import { Form, Button } from "react-bootstrap";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: true,
      filteredBeasts: beasts,
    };
  }

  SubmitForm = (event) => {
    event.preventDefault();
    console.log(event.target.Options.value);
    this.setState({
      filteredBeasts: beasts.filter((element) => {
        if (event.target.Options.value == "0") {
          return true;
        } else {
          if (element.horns == event.target.Options.value) {
            return true;
          } else {
            return false;
          }
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.SubmitForm}>
          <Form.Group aria-label="Default select example">
            <Form.Label>Choose required Horns number</Form.Label>

            <Form.Control as="Select" name="Options">
              <option value="0">All of them</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {this.state.filteredBeasts.map((element, index) => {
          return (
            <Hornedbeasts
              selectfun={this.props.selectfun}
              key={index}
              title={element.title}
              Imgurl={element.image_url}
              par={element.description}
              num={element.horns}
            />
          );
        })}
      </div>
    );
  }
}
export default Main;
