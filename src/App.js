import "./App.css";

import React, { Component } from "react";
import Covid from "./components/Covid";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "test",
      data: {},
    };
  }
  componentDidMount() {
    // var self = this;
    this.setState({ name: "g" });
    // axios.get("https://covid19.th-stat.com/api/open/today").then(
    //   function (res) {
    //     self.setState({ data: res.data });
    //     console.log(res.data);
    //   },
    //   function (e) {
    //     console.log(e);
    //   }
    // );
    axios
      .get("https://covid19.th-stat.com/api/open/today")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .then((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Covid data={this.state.data} />
      </div>
    );
  }
}
