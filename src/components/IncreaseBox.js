import React, { Component } from "react";
import ArrowUp from "./ArrowUp";
export default class IncreaseBox extends Component {
  render() {
    const { color, count } = this.props;
    return (
      <>
        <div className="increase">
          <div className="arrow">
            <ArrowUp color={color} />
            <p>เพิ่มขึ้น</p>
          </div>
          <h2>{count}</h2>
        </div>
      </>
    );
  }
}
