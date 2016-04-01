//import React from 'react';
import React, { Component } from 'react';

//class SearchBar extends React.Component {
class SearchBar extends Component {

    constructor(props) {
        super(props);

        // initalise the state
        this.state = { term: '' };
    }

    render() {
        //return <input onChange={this.onInputChange} />;
        //return <input onChange={(event) => console.log(event.target.value)} />;
        //return <input onChange={event => console.log(event.target.value)} />;
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }

    // this would be the old syntax but ES6 now allows us to do it in the <input /> tag
    //onInputChange(event) {
    //    console.log(event.target.value);
    //    console.log(event); // doesn't work with the event property on its own
    //
    //}
}

export default SearchBar;