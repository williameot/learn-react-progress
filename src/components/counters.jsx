import React, { Component, Fragment } from "react";
import Counter from "./counter";
import AddCounterModal from "./addcountermodal";
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Card,
  CardGroup,
  Popover,
  OverlayTrigger
} from "react-bootstrap";
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
        <Card.Body style={{ margin: 0, padding: 0 }}>
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
      <ButtonToolbar className="justify-content-between sticky-top bg-white">
        <ButtonGroup>
          <Button variant="primary" onClick={this.props.onReset}>
            Reset
          </Button>
          <AddCounterModal onAddModal={this.props.onAddModal} />
        </ButtonGroup>
        {this.createShoppingCartPopOver()}
      </ButtonToolbar>
    );
  };
  createBriefDescription = () => {
    return (
      <div>
        This page uses SVG placeholder:{" "}
        <a href="https://placeholder.com">https://placeholder.com</a>
      </div>
    );
  };
  createShoppingCartPopOver = () => {
    const popover = (
      <Popover
        title={
          <Fragment>
            {this.props.totalValue} | Total: {this.props.totalPrice}
          </Fragment>
        }
      >
        cart items go here
      </Popover>
    );
    return (
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={popover}
      >
        <Button variant="success">Cart</Button>
      </OverlayTrigger>
    );
  };
  render() {
    return (
      <div>
        {this.createBriefDescription()}
        {this.createCounterOptions()}
        {this.createCart()}
        {this.createGrid()}
      </div>
    );
  }
}

export default Counters;
