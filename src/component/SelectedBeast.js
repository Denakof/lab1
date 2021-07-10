import React from "react";
import { Modal, Button } from "react-bootstrap";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
            {this.props.par} <br></br>
            <br></br>
            Horns number is = {this.props.num}
          </Modal.Body>
          <img src={this.props.imgUrl} />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
