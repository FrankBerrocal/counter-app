import React, { Component } from "react"; //type imrc

//in jsx we dont have loops, we have maps
class Counter2 extends Component {
  //type cc
  state = {
    count: 0,
    tags: ["tag1"],
  };

  //we dont have if else in JSX, create a method in JS and created them.
  renderTags() {
    if (this.state.tags.length === 0) return <p>"There are no tags"</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}{" "}
      </ul>
    );
  }

  //render a message based on a single condition
  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter2;

/*for classname, use Bootstrap

https://getbootstrap.com/docs/4.1/getting-started/introduction/

 
*/
