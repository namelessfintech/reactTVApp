import React from 'react';
import './App.css';
import Intro from '../intro/intro';
import Series from '../../containers/series/index';


// class based components internally have state
class App extends React.Component {



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> TV Series</h1>
        </header>
        
        <Intro message="Here you can find all of your most loved series" />
        <Series />
      </div>
    )
  }
}


export default App;
