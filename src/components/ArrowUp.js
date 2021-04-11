import React, { Component } from "react";

export default class ArrowUp extends Component {
  render() {
    const { color } = this.props;
    return (
      <>
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <path
            d="M9.706 10.951l7.456 7.482a1.318 1.318 0 010 1.866l-1.24 1.243a1.307 1.307 0 01-1.858 0l-5.29-5.298-5.285 5.303a1.307 1.307 0 01-1.858 0L.386 20.304a1.318 1.318 0 010-1.865l7.456-7.482a1.309 1.309 0 011.864-.006zM7.842.388L.386 7.87a1.318 1.318 0 000 1.865l1.24 1.244a1.307 1.307 0 001.858 0l5.285-5.304 5.284 5.304a1.307 1.307 0 001.859 0l1.239-1.244a1.318 1.318 0 000-1.865L9.695.388a1.3 1.3 0 00-1.853 0z"
            fill={color}
          ></path>
        </svg>
      </>
    );
  }
}
