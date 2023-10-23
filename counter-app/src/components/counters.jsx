import React, { Component } from "react";
import Counter6 from "./counter6";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          lassName='btn btn-primary btn-sm m-2'
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter6
            key={counter.id} //used internally
            onDelete={this.props.onDelete} //keep passing the reference to all children
            onIncrement={this.props.onIncrement}
            counterProps={counter}
          ></Counter6>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
