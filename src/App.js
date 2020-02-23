import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import CheckingAccount from './components/checking/checkingAccount.js';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <h1> entry point </h1>
        <CheckingAccount />

      </div>
    );
  }
}

export default App;
