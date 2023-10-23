import React, { Component } from "react";
import Counter6 from "./counter6";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  handleDelete = (counterID) => {
    //console.log("event handler called", counterID);
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          lassName='btn btn-primary btn-sm m-2'
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter6
            key={counter.id} //used internally
            onDelete={this.handleDelete}
            //value={counter.value}
            //id={counter.id}  //used externally
            //pass all props as object
            counterProps={counter}
          ></Counter6>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
