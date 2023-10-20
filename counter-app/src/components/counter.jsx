import React, { Component } from 'react';  //type imrc


class Counter extends Component {  //type cc
    state ={ 
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };
    render() { 
        return (
        <React.Fragment>
            <img src={ this.state.imageUrl } alt="" />
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>
        );
    }

    formatCount(){
        const { count } = this.state; //add the curly braces.
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;  //we are exporting