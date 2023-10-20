import React, { Component } from 'react';  //type imrc

//in jsx we dont have loops, we have maps
class Counter2 extends Component {  //type cc
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
            <ul>
                { this.state.tags.map(tag => <li key={ tag } style={ { fontSize: 15, color: "black", margin:10}}> {tag} </li> ) }
            </ul>
        </React.Fragment>
        );
    }

}

//for classname, use Bootstrap
//https://getbootstrap.com/docs/4.1/getting-started/introduction/
//use classes for maintability 
 
export default Counter2;  //we are exporting