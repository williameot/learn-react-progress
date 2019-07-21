import React, { Component } from "react";
import Counter from "./counter";
import AddCounterModal from "./addcountermodal";
import { ButtonGroup, Button, Container, Row, Col } from "react-bootstrap";
class Counters extends Component {
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
          columnGrid.push(
            <Col sm={12} lg={4}>
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
                  <span className="m-2">Price: {item.price}</span>
                </div>
              </Counter>
            </Col>
          );
          currentIndex += 1;
        }
      }
      grid.push(<Row>{columnGrid}</Row>);
    }
    return <Container>{grid}</Container>;
  };
  createCart = () => {
    return (
      <div>
        <span className="badge badge-pill badge-secondary m-2">
          Items: {this.props.totalCounters}
        </span>
        <span className="badge badge-pill badge-secondary m-2">
          Increments: {this.props.totalValues}
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
        {this.createCounterOptions()}
        {this.createCart()}
        {this.createGrid()}
      </div>
    );
  }
}

export default Counters;
