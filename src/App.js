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
    counters: [
      { id: uuid(), value: 0 },
      { id: uuid(), value: 0 },
      { id: uuid(), value: 0 },
      { id: uuid(), value: 0 }
    ],
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
  handleDecrement = counter => {
    const { counters, index } = this.getCurrentCounter(counter); //counter is shown in the Counter component
    counters[index].value =
      counters[index].value === 0 ? 0 : counters[index].value - 1;
    this.setState({ counters });
    console.log("handleDecrement", counter);
  };
  handleIncrement = counter => {
    const { counters, index } = this.getCurrentCounter(counter); //counter is shown in the Counter component
    counters[index].value++;
    this.setState({ counters });
    console.log("handleIncrement", counter);
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleAdd = () => {
    const counters = [...this.state.counters];
    counters.push({ id: uuid(), value: 0 });
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  fetchFortniteApi() {
    return async () => {
      const data = await fetch(
        `https://fortnite-api.theapinetwork.com/store/get?authorization=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const items = await data.json();
      console.log(items);
      this.setState({ items });
    };
  }

  getCurrentCounter(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //counter is shown in the Counter component
    return { counters, index };
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
                      this.state.counters.filter(c => c.value > 0).length
                    }
                    totalValues={this.state.counters
                      .map(c => {
                        return c.value;
                      })
                      .reduce(
                        (previousValue, currentValue) =>
                          previousValue + currentValue,
                        0
                      )}
                    counters={this.state.counters}
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
