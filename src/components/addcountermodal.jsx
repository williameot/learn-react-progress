import React, { Component, Fragment } from "react";
import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";
class AddCounterModal extends Component {
  constructor() {
    super();
    this.state = { show: false, nameValue: "", typeValue: "" };
    //this.handleClose = this.handleClose.bind(this);
    //this.handleShow = this.handleShow.bind(this);
    //this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    this.props.onAddModal(this.state.nameValue, this.state.typeValue);
    this.handleClose();
    event.preventDefault();
  };
  render() {
    return (
      <Fragment>
        <Button variant="primary" onClick={this.handleShow}>
          Add Item
        </Button>
        <Modal
          id="addCounterModal"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Name
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                id="nameValue"
                name="nameValue"
                value={this.state.nameValue}
                onChange={this.handleInputChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Type
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                id="typeValue"
                name="typeValue"
                value={this.state.typeValue}
                onChange={this.handleInputChange}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default AddCounterModal;
