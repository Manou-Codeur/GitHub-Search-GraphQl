import React, { Component } from "react";
import CatIcon from "../assets/img/Octocat.png";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={CatIcon}
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
          transition: "all .3s ease",
          height: "150px",
        }}
      />
    );
  }
}

// class MouseWithCat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY,
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
//         {/*
//             We could just swap out the <p> for a <Cat> here ... but then
//             we would need to create a separate <MouseWithSomethingElse>
//             component every time we need to use it, so <MouseWithCat>
//             isn't really reusable yet.
//           */}
//         <Cat mouse={this.state} />
//       </div>
//     );
//   }
// }

// class MouseTracker extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Move the mouse around!</h1>
//         <MouseWithCat />
//       </div>
//     );
//   }
// }

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

export default MouseTracker;
