import React, { Component } from "react";
import Counter from "./counter";
import AddCounterModal from "./addcountermodal";
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    return (
      <div>
        <button
          className="btn btn-primary btn-small m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        <button
          className="btn btn-secondary btn-small m-2"
          onClick={this.props.onAdd}
        >
          Add Counter
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#addCounterModal"
        >
          Add Counter Modal
        </button>
        <span className="badge badge-pill badge-secondary m-2">
          Total Counters: {this.props.totalCounters}
        </span>
        <span className="badge badge-pill badge-secondary m-2">
          Total Value: {this.props.totalValues}
        </span>
        {this.props.items.map(item => (
          <Counter
            key={item.id}
            item={item}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            <div>
              <span className="m-2">Name: {item.name}</span>
              <span>Type: {item.type}</span>
            </div>
          </Counter>
        ))}
        <AddCounterModal onAddModal={this.props.onAddModal} />
      </div>
    );
  }
}

export default Counters;
