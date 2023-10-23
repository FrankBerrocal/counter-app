import React, { Component } from "react";

class Counter5 extends Component {


  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  //we dont call the handle method, just passing a reference
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counterProps.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
        <ul></ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state; //add the curly braces.
    return value === 0 ? "Zero" : value;
  }
}

//for classname, use Bootstrap
//https://getbootstrap.com/docs/4.1/getting-started/introduction/
//use classes for maintability
export default Counter5; //we are exporting
