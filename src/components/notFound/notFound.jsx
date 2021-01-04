import React, { Component } from "react";

import "./notFound.scss";

class NotFound extends Component {
  state = {
    added: false,
  };

  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  pathnameArr = this.props.location.pathname.split("/");

  render() {
    return (
      <div className="not-found">
        <h1>
          {this.pathnameArr.length > 2
            ? `${this.pathnameArr[2]} not Found`
            : "Page not Found"}
        </h1>
        <button onClick={() => this.setState(prev => ({ added: !prev.added }))}>
          Add Item
        </button>
        {this.state.added ? <h1>This is an H1!</h1> : <a>This is an anchor!</a>}
      </div>
    );
  }
}

export default NotFound;

// const Notfound = ({ history, location: { pathname } }) => {
//   const pathnameArr = pathname.split("/");

//   const goHome = () => {
//     history.replace("/");
//   };

//   return (
//     <div className="not-found">
//       <h1>
//         {pathnameArr.length > 2
//           ? `${pathnameArr[2]} not Found`
//           : "Page not Found"}
//       </h1>
//       <button onClick={goHome}>Go Home</button>
//     </div>
//   );
// };

// export default Notfound;
