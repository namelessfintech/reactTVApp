import React from 'react';
import './App.css';
import Main from '../main';

// class based components internally have state
class App extends React.Component {



  render(){
    // here I am using react router dom to render my series container via Main
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> TV Series</h1>
        </header>
        <Main />
      </div>
    )
  }
}


export default App;
