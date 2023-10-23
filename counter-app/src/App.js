import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counterElements: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counterElements]; //spread the state array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counterElements.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterID) => {
    const counters = this.state.counterElements.filter(
      (c) => c.id !== counterID
    );
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className='container'>
          <Counters
            key={this.state.counterElements.id}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            counters={this.state.counterElements}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
