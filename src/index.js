import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';




//: I can create elements in basic element form, similar to html. This is the basic building block
// const greeting = React.createElement('h1',{},"Hello World")

//: I can also refactor my createElements  to use JSX a special syntax to combine html,css, and js together

// jsx fully supports js so I can embedd expressions inside of it:
// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }

// jsx is a cleaner syntax to write React> JSX just transpile to createElement
// const greeting = <h1>Hello World With JSX, Current Date: {getCurrentDate()}</h1>


// ReactDOM.render(greeting,  document.getElementById('root'));

//: I can also render an app component: which can be composition of components
ReactDOM.render(<App/>,document.getElementById("root"));