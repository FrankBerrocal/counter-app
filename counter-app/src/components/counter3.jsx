import React, { Component } from "react"; //type imrc

//in jsx we dont have loops, we have maps
class Counter3 extends Component {
  //type cc
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  /*
  constructor() {
    super();
   
    this.handleIncrement = this.handleIncrement.bind(this);
    //this is the binding of the method.
    /*
    I add a constructor.  I can use this in here.
    I need to reference the father, using super, because my class is a child.
    this.handleIncrement is calling my method from the child class.  I use bind and call this, and that
    second this is calling a reference to the father.
    Then, I need to defind this.handleIncrement as the bind I have created already.
    */
  //  }

  //we define stayle using properties, then call the attribute in the html. also, inline as in the example.
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    this.state.count++;
    console.log("Increment clicked ", this.state.count);
  };

  //we dont call the handle method, just passing a reference
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //add the curly braces.
    return count === 0 ? "Zero" : count;
  }
}

//for classname, use Bootstrap
//https://getbootstrap.com/docs/4.1/getting-started/introduction/
//use classes for maintability
export default Counter3; //we are exporting
