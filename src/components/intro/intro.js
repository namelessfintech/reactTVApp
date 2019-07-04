
import React from 'react';

// I can create components as class or as functions
// do not forget the return function
const Intro = (props) => {
    return <p className="App-intro">
        {props.message}
  </p>

}


export default Intro;