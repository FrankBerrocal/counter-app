import React, { Component } from "react";
import Counter5 from "./counter5";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = () =>{
    console.log("event handler called");
  }
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter5 key={counter.id} value={counter.value} onDelete={this.handleDelete}></Counter5>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
