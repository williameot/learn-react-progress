import React, { Component, Fragment } from "react";
//import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import uuid from "uuid/v4";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import ErrorPage from "./components/errorpage";
class App extends Component {
  state = {
    //items: [{ id: uuid(), value: 0 }]
    items: []
  };
  constructor() {
    //Used to initialize properties of this class
    super();
    console.log("App - Constructor");
    //this.state = this.props.something  can only work in constructor
  }
  componentDidMount() {
    //api call
    console.log("component did mount call");
    const fetchItems = this.fetchFortniteApi();
    fetchItems();
  }
  handleDecrement = item => {
    const { items, index } = this.getCurrentCounter(item); //item is shown in the Counter component
    items[index].value = items[index].value === 0 ? 0 : items[index].value - 1;
    this.setState({ items });
    console.log("handleDecrement", item);
  };
  handleIncrement = item => {
    const { items, index } = this.getCurrentCounter(item); //item is shown in the Counter component
    console.log("handleIncrement: items", items);
    items[index].value++;
    this.setState({ items });
    console.log("handleIncrement", item);
  };
  handleDelete = itemId => {
    const items = this.state.items.filter(c => c.id !== itemId);
    this.setState({ items });
  };
  handleAdd = () => {
    const items = [...this.state.items];
    items.push({ id: uuid(), value: 0, name: "new item", type: "new type" });
    this.setState({ items });
  };
  handleReset = () => {
    const items = this.state.items.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ items });
  };
  setItemsState = (inputItems, apiType = "fortnite") => {
    let items = [...this.state.items];
    if (apiType == "fortnite") {
      for (const i in inputItems) {
        items.push({
          id: uuid(),
          value: 0,
          name: inputItems[i].item.name,
          type: inputItems[i].item.type
        });
      }
    }
    this.setState({ items });
  };
  fetchFortniteApi() {
    return async () => {
      const data = await fetch(
        `https://fortnite-api.theapinetwork.com/store/get?authorization=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const fortniteItems = await data.json();
      this.setItemsState(fortniteItems.data);
    };
  }

  getCurrentCounter(item) {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...items[index] }; //item is shown in the Counter component
    return { items, index };
  }

  render() {
    console.log("App - Rendered");
    return (
      <Fragment>
        <Router>
          <NavBar />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/counter"
                render={() => (
                  <Counters
                    totalCounters={
                      this.state.items.filter(c => c.value > 0).length
                    }
                    totalValues={this.state.items
                      .map(c => {
                        return c.value;
                      })
                      .reduce(
                        (previousValue, currentValue) =>
                          previousValue + currentValue,
                        0
                      )}
                    items={this.state.items}
                    onReset={this.handleReset}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
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
