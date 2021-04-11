import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    return (
      <>
        <div>Hello name : {this.props.name}</div>
      </>
    );
  }
}
