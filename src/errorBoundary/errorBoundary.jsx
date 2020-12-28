import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
    errorMsg: "",
  };

  componentDidCatch(err, info) {
    this.setState({ error: true, errorMsg: err });
  }

  render() {
    if (this.state.error)
      return <h1>Fire fire!!! We're trying to rescue other components!!</h1>;

    return this.props.children;
  }
}

export default ErrorBoundary;
