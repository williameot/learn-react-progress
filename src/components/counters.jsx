import React, { Component, Fragment } from "react";
import Counter from "./counter";
import AddCounterModal from "./addcountermodal";
import { ButtonGroup, Button, Card, CardGroup } from "react-bootstrap";
class Counters extends Component {
  createCounter = item => {
    return (
      <Counter
        item={item}
        onDelete={this.props.onDelete}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}
      >
        <Card.Img variant="top" src="https://via.placeholder.com/300x100" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Type: {item.type}
            <br /> Price: {item.price}
          </Card.Text>
        </Card.Body>
      </Counter>
    );
  };
  createCard = item => {
    return <Card key={item.id}>{this.createCounter(item)}</Card>;
  };
  createGrid = () => {
    let grid = [];
    let totalCounters = this.props.items.length;
    let totalColumns = 3;
    let totalRows = Math.ceil(totalCounters / totalColumns);
    let currentIndex = 0;
    let item = {};
    for (let i = 0; i < totalRows; i++) {
      let columnGrid = [];
      for (let j = 0; j < totalColumns; j++) {
        if (currentIndex < totalCounters) {
          item = this.props.items[currentIndex];
          columnGrid.push(this.createCard(item));
          currentIndex += 1;
        }
      }
      grid.push(<CardGroup key={item.id}>{columnGrid}</CardGroup>);
    }
    return <Fragment>{grid}</Fragment>;
  };
  createCart = () => {
    return (
      <div>
        <span className="badge badge-pill badge-secondary m-2">
          Items: {this.props.totalCounter}
        </span>
        <span className="badge badge-pill badge-secondary m-2">
          Increments: {this.props.totalValue}
        </span>
        <span className="badge badge-pill badge-secondary m-2">
          Cost: {this.props.totalPrice}
        </span>
      </div>
    );
  };
  createCounterOptions = () => {
    return (
      <ButtonGroup>
        <Button variant="primary" onClick={this.props.onReset}>
          Reset
        </Button>
        <AddCounterModal onAddModal={this.props.onAddModal} />
      </ButtonGroup>
    );
  };
  render() {
    return (
      <div>
        <div>
          SVG placeholder is used in this{" "}
          <a href="https://placeholder.com">page</a>: https://placeholder.com
        </div>
        {this.createCounterOptions()}
        {this.createCart()}
        {this.createGrid()}
      </div>
    );
  }
}

export default Counters;
