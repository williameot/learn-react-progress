import React, { Component } from "react";

class Api extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    items: []
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  constructor() {
    console.log("constructor call");
    super();
  }

  componentDidMount() {
    //api call
    console.log("component did mount call");
    const fetchItems = async () => {
      const data = await fetch(
        `https://fortnite-api.theapinetwork.com/store/get?authorization=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const items = await data.json();
      this.setState({ items });
    };
    fetchItems();
  }
  renderItemList() {
    if (this.state.tags.length === 0) return <p>There ar no tags</p>;
    console.log("render call");
    let items = this.state.items.data;
    let list = [];
    for (const i in items) {
      list.push(
        <li key={items[i].itemId}>
          Name: {items[i].item.name} Type: {items[i].item.type}
        </li>
      );
    }
    return <ul>{list}</ul>;
  }
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.renderItemList()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Api;
