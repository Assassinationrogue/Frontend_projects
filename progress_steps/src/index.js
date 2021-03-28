// import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react componenet

function getButtonText() {
    return 'Click on me!';
}

const App = function() {
    const buttonText = 'Click Me';
    return (
        <div>
            <label className="label" for="name">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>{getButtonText()}</button>
        </div>
    );
};

// Take the react component and show it on the screen


ReactDOM.render(<App />,document.querySelector('#root'));