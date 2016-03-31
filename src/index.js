import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component - this will produce HTML
const App =  function(){
    return <div>Hi!</div>;
}

//Take the component's generated HTML and put it in the DOM
ReactDOM.render(App);