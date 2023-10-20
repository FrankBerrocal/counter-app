import React, { Component } from 'react';  //type imrc

//in jsx we dont have loops, we have maps
class Counter extends Component {  //type cc
    state ={ 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']


    };

    //we define stayle using properties, then call the attribute in the html. also, inline as in the example.
    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    render() { 
        return (
        <React.Fragment>
            <span style = { {fontSize:15} } className={ this.getBadgeClasses() }>{this.formatCount()}</span>
            <button style={{fontSize: 20}} className='btn btn-secondary btn-sm'>Increment</button>
            <ul>
                { this.state.tags.map(tag => <li key={ tag } style={ { fontSize: 15, color: "black", margin:10}}> {tag} </li> ) }
                
            </ul>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state; //add the curly braces.
        return count === 0 ? "Zero" : count;
    }
}

//for classname, use Bootstrap
//https://getbootstrap.com/docs/4.1/getting-started/introduction/
//use classes for maintability 
 
export default Counter;  //we are exporting