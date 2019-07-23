import React, { Component, Fragment } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>Welcome to my portfolio page</h1>
        <p>
          This site consists of short demos. Please feel free to view them for
          reference.
        </p>
        <p>
          Source codes can be found in the Git page:
          <a href="https://github.com/williameot/learn-react-progress">
            https://github.com/williameot/learn-react-progress
          </a>
        </p>
      </Fragment>
    );
  }
}

export default Home;
