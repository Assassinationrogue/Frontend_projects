// import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react componenet

function getButtonText() {
    return 'Click on me!';
}
 // javascript will consider that html's for as javascript's for, so we replace that for with htmlFor
const App = function() {
    const buttonText = ['Hi', ' There'];
    return (
        <div>
            <label className="label" htmlFor="name"> 
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>
        </div>
    );
};

// Take the react component and show it on the screen


ReactDOM.render(<App />,document.querySelector('#root'));