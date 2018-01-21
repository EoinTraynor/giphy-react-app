import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GIFS from './GIFS';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Built with React  <img src={logo} className="App-logo" alt="logo" /></h1>
        </header>
        <GIFS />
      </div>
    );
  }
}

export default App;
