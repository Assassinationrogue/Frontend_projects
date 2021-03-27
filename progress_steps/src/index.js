// import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react componenet

const element = function() {
    return <div>Hello Mate!</div>;
};

// Take the react component and show it on the screen


ReactDOM.render(element,document.querySelector('#root'));