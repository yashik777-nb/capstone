import React from "react";
import spinner from "./loader.gif";

export default class Loader extends React.Component {
  render() {
    return (
      <div>
        <img
          src={spinner}
          style={{
            width: "50px",
            margin: "auto",
            display: "block",
          }}
          alt="Loading..."
        />
      </div>
    );
  }
}
