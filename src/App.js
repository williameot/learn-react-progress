import React, { Component, Fragment } from "react";
//import logo from "./logo.svg";
import NavigationBar from "./components/NavigationBar";
import Counters from "./components/counters";
import uuid from "uuid/v4";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import ErrorPage from "./components/errorpage";
class App extends Component {
  state = {
    //items: [{ id: uuid(), value: 0 }]
    items: [
      { id: uuid(), value: 0, name: "Pork chop", type: "Food", price: 100 },
      { id: uuid(), value: 0, name: "Salad", type: "Food", price: 90 },
      {
        id: uuid(),
        value: 0,
        name: "Mesh Chair",
        type: "Office Furniture",
        price: 5699
      }
    ]
  };

  componentDidMount() {
    //api call
    const fetchItems = this.fetchFortniteApi();
    fetchItems();
  }
  handleDecrement = item => {
    const { items, index } = this.getCurrentCounter(item); //item is shown in the Counter component
    items[index].value = items[index].value === 0 ? 0 : items[index].value - 1;
    this.setState({ items });
  };
  handleIncrement = item => {
    const { items, index } = this.getCurrentCounter(item); //item is shown in the Counter component
    items[index].value++;
    this.setState({ items });
  };
  handleDelete = itemId => {
    const items = this.state.items.filter(c => c.id !== itemId);
    this.setState({ items });
  };
  handleAdd = () => {
    const items = [...this.state.items];
    items.unshift({ id: uuid(), value: 0, name: "new item", type: "new type" });
    this.setState({ items });
  };
  handleAddModal = (nameValue, typeValue, priceValue) => {
    const items = [...this.state.items];
    items.unshift({
      id: uuid(),
      value: 0,
      name: nameValue,
      type: typeValue,
      price: priceValue
    });
    this.setState({ items });
  };
  handleReset = () => {
    const items = this.state.items.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ items });
  };
  handleResetItem = itemId => {
    const items = this.state.items.map(c => {
      if (c.id === itemId) {
        c.value = 0;
      }
      return c;
    });
    this.setState({ items });
  };
  setItemsState = (inputItems, apiType = "fortnite") => {
    //check if input items exist before set state
    if (inputItems.length > 0) {
      //let items = [...this.state.items];
      //replace existing items with items from api

      let items = [];
      if (apiType === "fortnite") {
        for (const i in inputItems) {
          items.push({
            id: uuid(),
            value: 0,
            name: inputItems[i].item.name,
            type: inputItems[i].item.type,
            price: parseInt(inputItems[i].store.cost, 10)
          });
        }
      }
      this.setState({ items: items });
    }
  };
  fetchFortniteApi() {
    return async () => {
      if (process.env.REACT_APP_API_KEY !== undefined) {
        const data = await fetch(
          `https://fortnite-api.theapinetwork.com/store/get?authorization=${
            process.env.REACT_APP_API_KEY
          }`
        );
        //case check
        if (data.status === 200) {
          const fortniteItems = await data.json();
          this.setItemsState(fortniteItems.data);
        }
      }
    };
  }

  getCurrentCounter(item) {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...items[index] }; //item is shown in the Counter component
    return { items, index };
  }

  render() {
    return (
      <Fragment>
        <Router>
          <NavigationBar />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/counter"
                render={() => (
                  <Counters
                    totalCounter={
                      this.state.items.filter(c => c.value > 0).length
                    }
                    totalValue={this.state.items
                      .map(c => {
                        return c.value;
                      })
                      .reduce(
                        (previousValue, currentValue) =>
                          previousValue + currentValue,
                        0
                      )}
                    totalPrice={this.state.items
                      .map(c => {
                        return c.value * c.price;
                      })
                      .reduce(
                        (previousPrice, currentPrice) =>
                          previousPrice + currentPrice,
                        0
                      )}
                    items={this.state.items}
                    onReset={this.handleReset}
                    onResetItem={this.handleResetItem}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onAddModal={this.handleAddModal}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                  />
                )}
              />
              <Route component={ErrorPage} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}
export default App;
