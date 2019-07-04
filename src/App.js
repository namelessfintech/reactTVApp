import React from 'react';
import './App.css';
import Intro from './components/intro/intro';






// I need to capitallize all my custom components, lowercase if for simple html elements aka "built in"




// class based components internally have state
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> TV Series</h1>
        </header>
        
        <Intro />

      </div>
    )
  }
}


export default App;
