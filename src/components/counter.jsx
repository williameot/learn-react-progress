import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("previous prop ", prevProps);
    console.log("previous state ", prevState);
    if (prevProps.item.value !== this.props.item.value) {
      //call ajax function
    }
  }
  componentWillUnmount(prevProps, prevState) {
    console.log("counter - Unmount");
    //you may use remove timers and cache to save memory
  }
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = product => {
  //   console.log("Product", product);
  //   this.setState({ value: this.state.value + 1 });
  //   console.log("Increment Clicked", this.state.value + 1);
  // };
  render() {
    const { item, onDelete, onIncrement, onDecrement, children } = this.props;
    let classes = this.getBadgeClasses();
    console.log("Counter - rendered");
    return (
      <div>
        {children}
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onIncrement(item)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(item)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.item;
    return value;
  }
}

export default Counter;
