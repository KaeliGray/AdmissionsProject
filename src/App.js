import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.scss';
import './components/NavLinks/NavLinks';
import NavLinks from './components/NavLinks/NavLinks';
import ValThot from './components/ValThot/ValThot';
import AppRouter from './components/Router/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header >
          <NavLinks />
        </header>
        <AppRouter />
      </div>
    );
  }
}

export default App;
