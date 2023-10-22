import React, { Component } from "react";
import Counter4 from "./counter4";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter4 key={counter.id} value={counter.value}>
            <h4>Counter # {counter.id} </h4>
          </Counter4>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
