import React, { Component } from "react";
class AddCounterModal extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { nameValue: "", typeValue: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    this.props.onAddModal(this.state.nameValue, this.state.typeValue);
    event.preventDefault();
    //onClick={() => onDecrement(item)}
  }
  render() {
    return (
      <div
        className="modal fade"
        id="addCounterModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addCounterModalLabel"
        aria-hidden="true"
      >
        <form>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addCounterModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="nameValue">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameValue"
                    name="nameValue"
                    placeholder="Name"
                    value={this.state.nameValue}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="typeValue">Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="typeValue"
                    name="typeValue"
                    placeholder="Type"
                    value={this.state.typeValue}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add Counter"
                  onClick={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCounterModal;
